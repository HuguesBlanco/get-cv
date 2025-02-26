import { View } from '@react-pdf/renderer';
import CvPersonDetail from '../elements/CvPersonDetails';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact, Languages, Name } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvFromProps = {
  name: Name;
  contact: Contact;
  language: Languages;
  color: string;
};

function CvFrom({
  name,
  contact,
  language,
  color,
}: CvFromProps): PdfViewElement {
  const title = language === Languages.FRENCH ? 'De la part de' : 'From';

  return (
    <View>
      <CvTitle1 color={color}>{title}</CvTitle1>
      <CvPersonDetail name={name} contact={contact} color={color} />
    </View>
  );
}

export default CvFrom;
