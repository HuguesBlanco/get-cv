import CvPersonDetail from '../elements/CvPersonDetails';
import { Contact, Name } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvFromProps = {
  name: Name;
  contact: Contact;
  color: string;
};

function CvFrom({ name, contact, color }: CvFromProps): PdfViewElement {
  return (
    <CvPersonDetail title="From" name={name} contact={contact} color={color} />
  );
}

export default CvFrom;
