import { PDFViewer } from '@react-pdf/renderer';
import { PdfDocumentElement, PdfViewerElement } from './types';

type CvViewerProps = {
  children: PdfDocumentElement;
};

function CvViewer({ children }: CvViewerProps): PdfViewerElement {
  return (
    <PDFViewer width="800px" height="1131.37px">
      {children}
    </PDFViewer>
  );
}

export default CvViewer;
