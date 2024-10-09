import CvPersonDetail from '../elements/CvPersonDetails';
import { Contact } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvContactProps = { contact: Contact; color: string };

function CvContact({ contact, color }: CvContactProps): PdfViewElement {
  return <CvPersonDetail title="Contact" contact={contact} color={color} />;
}

export default CvContact;
