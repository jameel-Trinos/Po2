/**
 * Global PDF.js Configuration and Warning Suppression
 * 
 * This module configures PDF.js globally and suppresses expected TextLayer abort warnings
 * that occur during normal PDF.js operations (zoom changes, page navigation, component unmounts).
 * 
 * These warnings are expected behavior when PDF.js cancels text layer rendering tasks,
 * and filtering them out keeps the console clean without hiding real errors.
 */

// Only run in browser environment
if (typeof window !== 'undefined') {
  // Store the original console.warn function
  const originalConsoleWarn = console.warn;
  
  // Override console.warn to filter PDF.js TextLayer abort warnings
  console.warn = (...args: any[]) => {
    // Check if this is a TextLayer abort warning
    const firstArg = args[0];
    
    // Handle different warning formats from PDF.js
    if (firstArg) {
      const message = firstArg?.toString?.() || '';
      const name = firstArg?.name || '';
      
      // Filter out TextLayer abort warnings (these are expected during normal operation)
      if (
        message.includes('TextLayer task cancelled') ||
        message.includes('AbortException') ||
        name === 'AbortException' ||
        name === 'AbortError' ||
        (typeof firstArg === 'object' && firstArg.message?.includes('TextLayer'))
      ) {
        // Silently ignore these expected warnings
        return;
      }
    }
    
    // Pass through all other warnings to the original console.warn
    originalConsoleWarn.apply(console, args);
  };
  
  // Log that the PDF.js warning filter is active (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('[PDF Config] TextLayer abort warning filter initialized');
  }
}

// Export a function to configure PDF.js worker
export function configurePdfWorker() {
  if (typeof window !== 'undefined') {
    // This will be called by individual PDF viewer components as needed
    // to ensure the worker is configured with the correct version
    return true;
  }
  return false;
}

// Export for explicit initialization if needed
export function initializePdfConfig() {
  // Already initialized above, but this function can be called
  // to ensure the configuration is active
  if (typeof window !== 'undefined') {
    return true;
  }
  return false;
}


