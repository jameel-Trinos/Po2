/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @deprecated This component uses Adobe PDF Embed API which has been replaced.
 * Please use PdfViewerPdfJs instead, which uses pdf.js and doesn't require
 * a client-side API key.
 * 
 * Migration:
 * - Replace: import PdfViewerAcrobat from '@/components/editor/PdfViewerAcrobat'
 * - With: import PdfViewerPdfJs from '@/components/editor/PdfViewerPdfJs'
 * 
 * The new viewer provides the same API interface but uses pdf.js for rendering.
 * See PDF_VIEWER_SETUP.md for migration guide.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';

type AcrobatApis = {
	gotoLocation: (opts: { pageNumber: number; zoom?: number }) => Promise<void>;
	addAnnotation?: (annotation: any) => Promise<void>;
	search?: (query: string) => Promise<{ pageNumber: number } | null>;
	reload: (file: Blob | string) => Promise<void>;
};

interface PdfViewerAcrobatProps {
	fileUrl: string;
	fileName?: string;
	onReady?: (apis: AcrobatApis) => void;
	className?: string;
}

declare global {
	interface Window {
		AdobeDC: any;
	}
}

const PdfViewerAcrobat: React.FC<PdfViewerAcrobatProps> = ({ fileUrl, fileName = 'document.pdf', onReady, className }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const viewerRef = useRef<any>(null);
	const apisRef = useRef<any>(null);
	const [scriptLoaded, setScriptLoaded] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (document.getElementById('adobe-dc-view')) {
			setScriptLoaded(true);
			return;
		}
		const script = document.createElement('script');
		script.src = 'https://documentcloud.adobe.com/view-sdk/viewer.js';
		script.id = 'adobe-dc-view';
		script.async = true;
		script.onload = () => setScriptLoaded(true);
		script.onerror = () => {
			setError('Failed to load Adobe PDF viewer. Please check your internet connection.');
			setIsLoading(false);
		};
		document.body.appendChild(script);
	}, []);

	const initViewer = useCallback(async () => {
		if (!scriptLoaded || !containerRef.current || !window.AdobeDC) {
			console.log('[PdfViewerAcrobat] Waiting for:', {
				scriptLoaded,
				containerReady: !!containerRef.current,
				adobeSDKLoaded: !!window.AdobeDC,
			});
			return;
		}
		
		const clientId = process.env.NEXT_PUBLIC_ADOBE_CLIENT_ID;
		console.log('[PdfViewerAcrobat] Client ID configured:', !!clientId);
		console.log('[PdfViewerAcrobat] Loading PDF:', fileUrl);
		
		if (!clientId) {
			console.error('[PdfViewerAcrobat] Missing Adobe Client ID');
			setError('Adobe Client ID is missing. Please add NEXT_PUBLIC_ADOBE_CLIENT_ID to your .env.local file.');
			setIsLoading(false);
			return;
		}

		try {
			setIsLoading(true);
			setError(null);

			const adobeDCView = new window.AdobeDC.View({
				clientId,
				divId: containerRef.current.id,
			});
			viewerRef.current = adobeDCView;

			const previewConfig = {
				enableAnnotationAPIs: true,
				includePDFAnnotations: true,
				showLeftHandPanel: true,
				showAnnotationTools: true,
			};

			await adobeDCView.previewFile(
				{
					content: { location: { url: fileUrl } },
					metaData: { fileName },
				},
				previewConfig
			);

			const apis = await adobeDCView.getAPIs();
			apisRef.current = apis;

			const wrappedApis: AcrobatApis = {
				gotoLocation: async ({ pageNumber, zoom = 150 }) => {
					if (!apis || !apis.viewer) return;
					await apis.viewer.gotoLocation({ pageNumber, zoom });
				},
				addAnnotation: apis?.annotationManager
					? async (annotation: any) => {
							await apis.annotationManager.addAnnotation(annotation);
					  }
					: undefined,
				search: apis?.viewer
					? async (query: string) => {
							try {
								// Adobe viewer search API is limited; attempt find via gotoLocation of first match using full-text search UI command if available
								const result = await apis.viewer.search?.(query);
								// Not all versions expose a structured result; fallback null if not supported
								return result ?? null;
							} catch {
								return null;
							}
					  }
					: undefined,
				reload: async (file: Blob | string) => {
					if (typeof file === 'string') {
						await adobeDCView.previewFile(
							{
								content: { location: { url: file } },
								metaData: { fileName },
							},
							previewConfig
						);
					} else {
						const blobUrl = URL.createObjectURL(file);
						await adobeDCView.previewFile(
							{
								content: { location: { url: blobUrl } },
								metaData: { fileName },
							},
							previewConfig
						);
					}
				},
			};

			console.log('[PdfViewerAcrobat] PDF loaded successfully');
			setIsLoading(false);
			onReady?.(wrappedApis);
		} catch (err) {
			console.error('[PdfViewerAcrobat] Error initializing Adobe PDF viewer:', err);
			setError(err instanceof Error ? err.message : 'Failed to load PDF document. Please check if the URL is valid and accessible.');
			setIsLoading(false);
		}
	}, [fileUrl, fileName, onReady, scriptLoaded]);

	useEffect(() => {
		initViewer();
	}, [initViewer]);

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
					{error.includes('Adobe Client ID') && (
						<div className="mt-4 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-md">
							<p className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">
								Add to .env.local:<br />
								NEXT_PUBLIC_ADOBE_CLIENT_ID=your_client_id_here
							</p>
						</div>
					)}
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

	return <div id="acrobat-viewer-container" ref={containerRef} className={className ?? 'w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800'} />;
};

export default PdfViewerAcrobat;


