import { PDFViewer } from '@react-pdf/renderer';
import MyCvAsPdf from './MyCvAsPdf';

function CvViewer(): JSX.Element {
  return (
    <PDFViewer width="800px" height="1131.37px">
      <MyCvAsPdf />
    </PDFViewer>
  );
}

export default CvViewer;
