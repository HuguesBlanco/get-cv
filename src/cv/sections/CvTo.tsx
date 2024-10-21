import { View } from '@react-pdf/renderer';
import CvPersonDetail from '../elements/CvPersonDetails';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact, Languages, Name } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvFromProps = {
  organization: string;
  name: Name;
  contact: Contact;
  language: Languages;
  color: string;
};

function CvTo({
  organization,
  name,
  contact,
  language,
  color,
}: CvFromProps): PdfViewElement {
  const title = language === Languages.FRENCH ? 'Pour' : 'To';

  return (
    <View style={{ marginBottom: '10mm' }}>
      <CvTitle1 color={color}>{title}</CvTitle1>
      <CvPersonDetail
        organization={organization}
        name={name}
        contact={contact}
        color={color}
      />
    </View>
  );
}

export default CvTo;
