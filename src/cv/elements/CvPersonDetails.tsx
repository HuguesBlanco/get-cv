import { Text, View } from '@react-pdf/renderer';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact, Name } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

function displayName(name: Name): string {
  const { firstName, lastName } = name;

  if (firstName === undefined && lastName === undefined) {
    return '';
  }

  const spaceBetweenNames =
    firstName !== undefined && lastName !== undefined ? ' ' : '';

  return `${firstName ?? ''}${spaceBetweenNames}${lastName ?? ''}`;
}

type CvPersonDetailProps = {
  organization?: string;
  title?: string;
  name?: Name;
  contact: Contact;
  color: string;
};

function CvPersonDetail({
  organization,
  title,
  name,
  contact,
  color,
}: CvPersonDetailProps): PdfViewElement {
  return (
    <View>
      {title !== undefined && <CvTitle1 color={color}>{title}</CvTitle1>}

      {organization !== undefined && (
        <CvListItem>
          <Text style={{ textTransform: 'uppercase' }}>{organization}</Text>
        </CvListItem>
      )}

      {name !== undefined &&
        !(name.firstName === undefined && name.lastName === undefined) && (
          <CvListItem>
            <Text style={{ fontWeight: 'bold' }}>{displayName(name)}</Text>
          </CvListItem>
        )}

      {contact.email !== undefined && (
        <CvListItem icon="envelope" iconSize={10}>
          <Text>{contact.email}</Text>
        </CvListItem>
      )}

      {contact.phone !== undefined && (
        <CvListItem icon="phone" iconSize={10}>
          <Text>{contact.phone}</Text>
        </CvListItem>
      )}

      {contact.postalAddress !== undefined && (
        <CvListItem
          icon="locationDot"
          iconSize={10}
          isBottomSpacingEnabled={false}
        >
          <View>
            <Text>
              {contact.postalAddress.streetNumber}{' '}
              {contact.postalAddress.streetName}
              {contact.postalAddress.additionalAddressInfo !== undefined
                ? ` ${contact.postalAddress.additionalAddressInfo}`
                : ''}
            </Text>

            <Text>
              {contact.postalAddress.postalCode !== undefined
                ? `${contact.postalAddress.postalCode} `
                : ''}
              {contact.postalAddress.city}
            </Text>

            {contact.postalAddress.country !== undefined && (
              <Text>{contact.postalAddress.country}</Text>
            )}
          </View>
        </CvListItem>
      )}
    </View>
  );
}

export default CvPersonDetail;
