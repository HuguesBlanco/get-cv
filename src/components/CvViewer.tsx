import { PDFViewer } from '@react-pdf/renderer';
import CvDocument from './CvDocument';
import { PdfViewerElement } from './types';

function CvViewer(): PdfViewerElement {
  return (
    <PDFViewer width="800px" height="1131.37px">
      <CvDocument />
    </PDFViewer>
  );
}

export default CvViewer;
