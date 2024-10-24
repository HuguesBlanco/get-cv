import { View } from '@react-pdf/renderer';
import CvPersonDetail from '../elements/CvPersonDetails';
import {
  isDisplayableString,
  isDisplayableStringInObject,
} from '../libs/textUtils';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact, Languages, Name } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvToProps = {
  organization: string | undefined;
  name: Name | undefined;
  contact: Contact | undefined;
  language: Languages;
  color: string;
};

function CvTo({
  organization,
  name,
  contact,
  language,
  color,
}: CvToProps): PdfViewElement {
  const isComponentDisplayed =
    isDisplayableString(organization) ||
    (name !== undefined && isDisplayableStringInObject(name)) ||
    (contact !== undefined && isDisplayableStringInObject(contact));

  if (!isComponentDisplayed) {
    return <View></View>;
  }

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
