import { View } from '@react-pdf/renderer';
import CvPersonDetail from '../elements/CvPersonDetails';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact, Name } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvFromProps = {
  name: Name;
  contact: Contact;
  color: string;
};

function CvFrom({ name, contact, color }: CvFromProps): PdfViewElement {
  return (
    <View>
      <CvTitle1 color={color}>From</CvTitle1>
      <CvPersonDetail name={name} contact={contact} color={color} />
    </View>
  );
}

export default CvFrom;
