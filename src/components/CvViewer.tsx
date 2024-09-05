import { PDFViewer } from '@react-pdf/renderer';
import { Languages } from '../types';
import CvDocument from './CvDocument';
import { PdfViewerElement } from './types';

type CvViewerProps = {
  language: Languages;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
};

function CvViewer({
  language,
  isCvIncluded,
  isCoverLetterIncluded,
}: CvViewerProps): PdfViewerElement {
  return (
    <PDFViewer width="800px" height="1131.37px">
      <CvDocument
        language={language}
        isCvIncluded={isCvIncluded}
        isCoverLetterIncluded={isCoverLetterIncluded}
      />
    </PDFViewer>
  );
}

export default CvViewer;
