import { View } from '@react-pdf/renderer';
import CvPersonDetail from '../elements/CvPersonDetails';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact, Languages } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvContactProps = { contact: Contact; langage: Languages; color: string };

function CvContact({
  contact,
  langage,
  color,
}: CvContactProps): PdfViewElement {
  const title = langage === Languages.FRENCH ? 'Coordonnées' : 'Contact';

  return (
    <View>
      <CvTitle1 color={color}>{title}</CvTitle1>
      <CvPersonDetail contact={contact} color={color} />
    </View>
  );
}

export default CvContact;
