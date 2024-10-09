import { View } from '@react-pdf/renderer';
import CvPersonDetail from '../elements/CvPersonDetails';
import { Contact, Name } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvFromProps = {
  organization: string;
  name: Name;
  contact: Contact;
  color: string;
};

function CvTo({
  organization,
  name,
  contact,
  color,
}: CvFromProps): PdfViewElement {
  return (
    <View style={{ marginBottom: '10mm' }}>
      <CvPersonDetail
        title="To"
        organization={organization}
        name={name}
        contact={contact}
        color={color}
      />
    </View>
  );
}

export default CvTo;
