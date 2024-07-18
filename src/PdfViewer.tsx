import { PDFViewer } from '@react-pdf/renderer';
import MyCvAsPdf from './MyCvAsPdf';

export default function PdfViewer(): JSX.Element {
  return (
    <PDFViewer>
      <MyCvAsPdf />
    </PDFViewer>
  );
}
