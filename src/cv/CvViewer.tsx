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
  const viewerHeight = `${String(numberOfPage * 360)}mm`;

  return (
    <PDFViewer
      style={{
        border: 'none',
        width: '100%',
        height: viewerHeight,
        minHeight: '100%',
      }}
    >
      {children}
    </PDFViewer>
  );
}

export default CvViewer;
