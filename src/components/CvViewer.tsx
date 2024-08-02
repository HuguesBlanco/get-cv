import { PDFViewer } from '@react-pdf/renderer';
import MyCvAsPdf from './MyCvAsPdf';
import { PdfViewerElement } from './types';

function CvViewer(): PdfViewerElement {
  return (
    <PDFViewer width="800px" height="1131.37px">
      <MyCvAsPdf />
    </PDFViewer>
  );
}

export default CvViewer;
