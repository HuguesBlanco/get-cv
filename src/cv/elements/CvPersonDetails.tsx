import { Text, View } from '@react-pdf/renderer';
import CvIcon from '../primitives/CvIcon';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type ContactDetailProps = {
  icon: 'envelope' | 'phone';
  text: string;
  leftSpace: string;
};

function ContactDetail({
  icon,
  text,
  leftSpace,
}: ContactDetailProps): PdfViewElement {
  return (
    <CvListItem>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: leftSpace, justifyContent: 'center' }}>
          <CvIcon icon={icon} size={10} />
        </View>
        <Text>{text}</Text>
      </View>
    </CvListItem>
  );
}

type PostalAddressInfoProps = {
  postalAddress: Contact['postalAddress'];
  leftSpace: string;
};

function PostalAddressInfo({
  postalAddress,
  leftSpace,
}: PostalAddressInfoProps): PdfViewElement | null {
  if (!postalAddress) {
    return null;
  }

  return (
    <CvListItem isBottomSpacingEnabled={false}>
      <View>
        {/* Street information */}
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: leftSpace, justifyContent: 'center' }}>
            <CvIcon icon="locationDot" size={10} />
          </View>
          <Text>
            {postalAddress.streetNumber} {postalAddress.streetName}
            {postalAddress.additionalAddressInfo !== undefined
              ? ` ${postalAddress.additionalAddressInfo}`
              : ''}
          </Text>
        </View>

        {/* Postal code and city */}
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: leftSpace }} />
          <Text>
            {postalAddress.postalCode !== undefined
              ? `${postalAddress.postalCode} `
              : ''}
            {postalAddress.city}
          </Text>
        </View>

        {/* Country */}
        {postalAddress.country !== undefined && (
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: leftSpace }} />
            <Text>{postalAddress.country}</Text>
          </View>
        )}
      </View>
    </CvListItem>
  );
}

type CvPersonDetailsProps = {
  title?: string;
  contact: Contact;
  color: string;
};

function CvPersonDetails({
  title,
  contact,
  color,
}: CvPersonDetailsProps): PdfViewElement {
  const leftSpace = '5mm';

  return (
    <View>
      {title !== undefined && <CvTitle1 color={color}>{title}</CvTitle1>}

      {contact.email !== undefined && (
        <ContactDetail
          icon="envelope"
          text={contact.email}
          leftSpace={leftSpace}
        />
      )}

      {contact.phone !== undefined && (
        <ContactDetail
          icon="phone"
          text={contact.phone}
          leftSpace={leftSpace}
        />
      )}

      {contact.postalAddress !== undefined && (
        <PostalAddressInfo
          postalAddress={contact.postalAddress}
          leftSpace={leftSpace}
        />
      )}
    </View>
  );
}

export default CvPersonDetails;
