import { pdf } from '@react-pdf/renderer';
import { useCallback } from 'react';
import { PdfDocumentElement } from './types/pdfTypes';

function useDocumentDownload(
  pdfDocument: PdfDocumentElement,
  fileName: string,
): () => Promise<void> {
  const download = useCallback(async () => {
    console.log('download');
    const blob = await pdf(pdfDocument).toBlob();

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }, [fileName, pdfDocument]);

  return download;
}

export default useDocumentDownload;
