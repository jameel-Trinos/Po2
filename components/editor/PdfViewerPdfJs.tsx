/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';

// Helper function to load pdfjs dynamically
async function loadPdfJs() {
	const pdfjs = await import('pdfjs-dist');
	if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
		pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
	}
	return pdfjs;
}

type PdfJsApis = {
	gotoLocation: (opts: { pageNumber: number; zoom?: number }) => Promise<void>;
	getCurrentPage: () => number;
	getTotalPages: () => number;
	reload: (file: Blob | string) => Promise<void>;
	search?: (query: string) => Promise<{ pageNumber: number } | null>;
};

interface PdfViewerPdfJsProps {
	fileUrl: string;
	fileName?: string;
	onReady?: (apis: PdfJsApis) => void;
	className?: string;
}

const PdfViewerPdfJs: React.FC<PdfViewerPdfJsProps> = ({ 
	fileUrl, 
	fileName = 'document.pdf', 
	onReady, 
	className 
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRefs = useRef<Map<number, HTMLCanvasElement>>(new Map());
	const renderTasksRef = useRef<Map<number, any>>(new Map());
	const renderingInProgressRef = useRef<Map<number, boolean>>(new Map());
	const [pdfDoc, setPdfDoc] = useState<any | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [zoom, setZoom] = useState(1.5);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [renderedPages, setRenderedPages] = useState<Set<number>>(new Set());

	// Load PDF document
	const loadPdf = useCallback(async (url: string) => {
		try {
			setIsLoading(true);
			setError(null);

			// Dynamically load pdfjs
			const pdfjs = await loadPdfJs();
			const loadingTask = pdfjs.getDocument(url);
			const pdf = await loadingTask.promise;
			
			setPdfDoc(pdf);
			setTotalPages(pdf.numPages);
			setRenderedPages(new Set());
			
			console.log('[PdfViewerPdfJs] PDF loaded successfully:', pdf.numPages, 'pages');
			setIsLoading(false);
		} catch (err) {
			console.error('[PdfViewerPdfJs] Error loading PDF:', err);
			setError(err instanceof Error ? err.message : 'Failed to load PDF document');
			setIsLoading(false);
		}
	}, []);

	// Render a single page
	const renderPage = useCallback(async (pageNum: number) => {
		if (!pdfDoc) return;

		// Check if already rendering this page
		if (renderingInProgressRef.current.get(pageNum)) {
			console.log(`[PdfViewerPdfJs] Page ${pageNum} is already rendering, skipping`);
			return;
		}

		// Wait a bit for canvas to be ready if it's not available yet
		const canvas = canvasRefs.current.get(pageNum);
		if (!canvas) {
			console.log(`[PdfViewerPdfJs] Canvas not ready for page ${pageNum}, skipping render`);
			return;
		}

		// Mark as rendering in progress
		renderingInProgressRef.current.set(pageNum, true);

		// Cancel any existing render task for this page
		const existingTask = renderTasksRef.current.get(pageNum);
		if (existingTask) {
			try {
				console.log(`[PdfViewerPdfJs] Cancelling existing render for page ${pageNum}`);
				await existingTask.cancel();
				renderTasksRef.current.delete(pageNum);
				// Wait for cancellation to fully complete
				await new Promise(resolve => setTimeout(resolve, 100));
			} catch (e) {
				// Ignore errors during cancellation
				console.log(`[PdfViewerPdfJs] Cancellation error for page ${pageNum}:`, e);
			}
		}

		try {
			const page: any = await pdfDoc.getPage(pageNum);
			
			// Double-check canvas is still available
			const currentCanvas = canvasRefs.current.get(pageNum);
			if (!currentCanvas) {
				renderingInProgressRef.current.set(pageNum, false);
				return;
			}

			const context = currentCanvas.getContext('2d');
			if (!context) {
				renderingInProgressRef.current.set(pageNum, false);
				return;
			}

			const viewport = page.getViewport({ scale: zoom });
			
			// Clear any previous content before resizing
			context.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
			
			currentCanvas.width = viewport.width;
			currentCanvas.height = viewport.height;
			currentCanvas.style.width = '100%';
			currentCanvas.style.height = 'auto';

			const renderContext = {
				canvasContext: context,
				viewport: viewport,
			};

			const renderTask = page.render(renderContext);
			renderTasksRef.current.set(pageNum, renderTask);

			await renderTask.promise;
			renderTasksRef.current.delete(pageNum);
			setRenderedPages(prev => new Set([...prev, pageNum]));
			
			console.log(`[PdfViewerPdfJs] Rendered page ${pageNum}/${totalPages}`);
		} catch (err: any) {
			// Clean up the render task reference
			renderTasksRef.current.delete(pageNum);
			// Ignore cancellation errors
			if (err?.name !== 'RenderingCancelledException') {
				console.error(`[PdfViewerPdfJs] Error rendering page ${pageNum}:`, err);
			}
		} finally {
			// Always mark as no longer rendering
			renderingInProgressRef.current.set(pageNum, false);
		}
	}, [pdfDoc, zoom, totalPages]);

	// Cleanup render tasks when zoom changes
	useEffect(() => {
		// Cancel all existing render tasks when zoom changes
		const cancelAllTasks = async () => {
			const cancelPromises: Promise<void>[] = [];
			renderTasksRef.current.forEach((task, pageNum) => {
				cancelPromises.push(
					(async () => {
						try {
							await task.cancel();
						} catch (e) {
							// Ignore errors during cancellation
						}
					})()
				);
			});
			await Promise.all(cancelPromises);
			renderTasksRef.current.clear();
			renderingInProgressRef.current.clear();
			setRenderedPages(new Set());
		};
		
		cancelAllTasks();
	}, [zoom]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			// Cancel all render tasks on unmount
			renderTasksRef.current.forEach((task) => {
				try {
					task.cancel();
				} catch (e) {
					// Ignore errors during cleanup
				}
			});
			renderTasksRef.current.clear();
			renderingInProgressRef.current.clear();
		};
	}, []);

	// Initial PDF load
	useEffect(() => {
		if (fileUrl) {
			loadPdf(fileUrl);
		}
	}, [fileUrl, loadPdf]);

	// Render visible pages
	useEffect(() => {
		if (pdfDoc && totalPages > 0) {
			// Render current page and a few pages around it for smooth scrolling
			const pagesToRender = [
				currentPage,
				Math.max(1, currentPage - 1),
				Math.min(totalPages, currentPage + 1),
			];
			
			// Render pages sequentially to avoid canvas conflicts
			const renderSequentially = async () => {
				for (const pageNum of pagesToRender) {
					if (!renderedPages.has(pageNum) && !renderingInProgressRef.current.get(pageNum)) {
						await renderPage(pageNum);
						// Small delay between renders to ensure clean separation
						await new Promise(resolve => setTimeout(resolve, 50));
					}
				}
			};
			
			// Use a small delay to ensure canvases are mounted and ready
			const timeoutId = setTimeout(() => {
				renderSequentially();
			}, 100);
			
			return () => clearTimeout(timeoutId);
		}
	}, [pdfDoc, currentPage, totalPages, renderPage, renderedPages]);

	// Setup APIs
	useEffect(() => {
		if (!pdfDoc || !onReady) return;

		const apis: PdfJsApis = {
			gotoLocation: async ({ pageNumber, zoom: newZoom }) => {
				if (pageNumber > 0 && pageNumber <= totalPages) {
					setCurrentPage(pageNumber);
					if (newZoom) {
						setZoom(newZoom / 100); // Convert percentage to scale
					}
					
					// Scroll to page
					const pageElement = document.getElementById(`pdf-page-${pageNumber}`);
					if (pageElement) {
						pageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				}
			},
			getCurrentPage: () => currentPage,
			getTotalPages: () => totalPages,
			reload: async (file: Blob | string) => {
				const url = typeof file === 'string' ? file : URL.createObjectURL(file);
				await loadPdf(url);
			},
			search: async (query: string) => {
				// Basic text search implementation
				try {
					for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
						const page = await pdfDoc.getPage(pageNum);
						const textContent = await page.getTextContent();
						const text = textContent.items.map((item: any) => item.str).join(' ');
						
						if (text.toLowerCase().includes(query.toLowerCase())) {
							return { pageNumber: pageNum };
						}
					}
					return null;
				} catch (err) {
					console.error('[PdfViewerPdfJs] Search error:', err);
					return null;
				}
			},
		};

		onReady(apis);
	}, [pdfDoc, currentPage, totalPages, onReady, loadPdf]);

	// Handle scroll to update current page
	const handleScroll = useCallback(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const scrollTop = container.scrollTop;
		
		// Find which page is most visible
		for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
			const pageElement = document.getElementById(`pdf-page-${pageNum}`);
			if (pageElement) {
				const rect = pageElement.getBoundingClientRect();
				const containerRect = container.getBoundingClientRect();
				
				if (rect.top <= containerRect.top + 100 && rect.bottom >= containerRect.top) {
					setCurrentPage(pageNum);
					break;
				}
			}
		}
	}, [totalPages]);

	if (error) {
		return (
			<div className={className ?? 'w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800'}>
				<div className="flex flex-col items-center justify-center h-full p-6 bg-red-50 dark:bg-red-900/10">
					<svg
						className="w-16 h-16 text-red-500 dark:text-red-400 mb-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
					<h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">Failed to Load PDF</h3>
					<p className="text-sm text-red-600 dark:text-red-400 text-center max-w-md">{error}</p>
				</div>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className={className ?? 'w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800'}>
				<div className="flex flex-col items-center justify-center h-full p-6 bg-zinc-50 dark:bg-zinc-900">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-zinc-100 mb-4"></div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Loading PDF viewer...</p>
				</div>
			</div>
		);
	}

	return (
		<div 
			ref={containerRef}
			className={className ?? 'w-full h-[75vh] rounded-md overflow-auto border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900'}
			onScroll={handleScroll}
		>
			{/* Toolbar */}
			<div className="sticky top-0 z-10 bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-4 py-2 flex items-center justify-between shadow-sm">
				<div className="flex items-center gap-3">
					<button
						onClick={() => {
							const newPage = Math.max(1, currentPage - 1);
							setCurrentPage(newPage);
							document.getElementById(`pdf-page-${newPage}`)?.scrollIntoView({ behavior: 'smooth' });
						}}
						disabled={currentPage <= 1}
						className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
					>
						Previous
					</button>
					<span className="text-sm text-zinc-700 dark:text-zinc-300">
						Page {currentPage} of {totalPages}
					</span>
					<button
						onClick={() => {
							const newPage = Math.min(totalPages, currentPage + 1);
							setCurrentPage(newPage);
							document.getElementById(`pdf-page-${newPage}`)?.scrollIntoView({ behavior: 'smooth' });
						}}
						disabled={currentPage >= totalPages}
						className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
					>
						Next
					</button>
				</div>
				
				<div className="flex items-center gap-2">
					<button
						onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
						className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
					>
						-
					</button>
					<span className="text-sm text-zinc-700 dark:text-zinc-300 min-w-[60px] text-center">
						{Math.round(zoom * 100)}%
					</span>
					<button
						onClick={() => setZoom(z => Math.min(3, z + 0.25))}
						className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
					>
						+
					</button>
				</div>
			</div>

			{/* PDF Pages */}
			<div className="p-4 space-y-4">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
					<div
						key={pageNum}
						id={`pdf-page-${pageNum}`}
						className="bg-white dark:bg-white shadow-lg mx-auto"
						style={{ maxWidth: 'fit-content' }}
					>
						<canvas
							ref={(el) => {
								if (el) {
									canvasRefs.current.set(pageNum, el);
									// Don't eagerly render here - let the useEffect control rendering
								} else {
									// Clean up when canvas is unmounted
									canvasRefs.current.delete(pageNum);
								}
							}}
							className="block"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PdfViewerPdfJs;

