import { View } from '@react-pdf/renderer';
import CvPersonDetail from '../elements/CvPersonDetails';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvContactProps = { contact: Contact; color: string };

function CvContact({ contact, color }: CvContactProps): PdfViewElement {
  return (
    <View>
      <CvTitle1 color={color}>Contact</CvTitle1>
      <CvPersonDetail contact={contact} color={color} />;
    </View>
  );
}

export default CvContact;
