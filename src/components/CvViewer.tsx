import { PDFViewer } from '@react-pdf/renderer';
import { Languages } from '../types';
import CvDocument from './CvDocument';
import { PdfViewerElement } from './types';

type CvViewerProps = {
  language: Languages;
};

function CvViewer({ language }: CvViewerProps): PdfViewerElement {
  return (
    <PDFViewer width="800px" height="1131.37px">
      <CvDocument language={language} />
    </PDFViewer>
  );
}

export default CvViewer;
