import { Text } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';
import CvParagraph from './CvParagraph';
import CvSectionContainer from './CvSectionContainer';
import CvTitle from './CvTitle';

type CvContactProps = { cvData: CvData };

function CvContact({ cvData }: CvContactProps): JSX.Element {
  return (
    <CvSectionContainer>
      <CvTitle>CONTACT</CvTitle>

      <CvParagraph>{cvData.contact.email}</CvParagraph>

      <CvParagraph>{cvData.contact.phone}</CvParagraph>

      <CvParagraph>
        <Text>{`${cvData.contact.postalAddress.streetNumber} ${cvData.contact.postalAddress.streetName} ${cvData.contact.postalAddress.additionalAddressInfo}`}</Text>
        <Text>{`${cvData.contact.postalAddress.postalCode} ${cvData.contact.postalAddress.city}`}</Text>
        <Text>{cvData.contact.postalAddress.country}</Text>
      </CvParagraph>
    </CvSectionContainer>
  );
}

export default CvContact;
