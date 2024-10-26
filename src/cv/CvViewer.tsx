import { PDFViewer } from '@react-pdf/renderer';
import { PdfDocumentElement, PdfViewerElement } from './types/pdfTypes';

type CvViewerProps = {
  children: PdfDocumentElement;
  numberOfPages: number;
};

function CvViewer({
  children,
  numberOfPages: numberOfPage,
}: CvViewerProps): PdfViewerElement {
  const viewerHeight = `${String(numberOfPage * 320)}mm`;

  return (
    <PDFViewer
      style={{
        border: 'none',
        width: '100%',
        height: viewerHeight,
      }}
    >
      {children}
    </PDFViewer>
  );
}

export default CvViewer;
