import { Text, View } from '@react-pdf/renderer';
import {
  isDisplayableString,
  isDisplayableStringInObject,
} from '../libs/textUtils';
import CvListItem from '../primitives/CvListItem';
import { Contact, Name, PostalAddress } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvNameProps = {
  name: Name;
};

function CvName({ name }: CvNameProps): React.JSX.Element | null {
  if (!isDisplayableStringInObject(name)) return null;

  const firstName = isDisplayableString(name.firstName) ? name.firstName : '';
  const lastNameSpace = isDisplayableString(firstName) ? ' ' : '';
  const lastName = isDisplayableString(name.lastName)
    ? `${lastNameSpace}${name.lastName}`
    : '';
  const fullName = `${firstName}${lastName}`;

  return (
    <CvListItem>
      <Text style={{ fontWeight: 'bold' }}>{fullName}</Text>
    </CvListItem>
  );
}

type CvPostalAddressProps = {
  address: PostalAddress;
};

function CvPostalAddress({
  address,
}: CvPostalAddressProps): PdfViewElement | null {
  if (!isDisplayableStringInObject(address)) return null;

  const streetName = isDisplayableString(address.streetName)
    ? address.streetName
    : '';
  const streetNumberSpace = isDisplayableString(streetName) ? ' ' : '';
  const streetNumber = isDisplayableString(address.streetNumber)
    ? `${streetNumberSpace}${address.streetNumber}`
    : '';
  const additionalAddressInfoSpace =
    isDisplayableString(streetName) || isDisplayableString(streetNumber)
      ? ' '
      : '';
  const additionalAddressInfo = isDisplayableString(
    address.additionalAddressInfo,
  )
    ? `${additionalAddressInfoSpace}${address.additionalAddressInfo}`
    : '';
  const streetAddress = `${streetName}${streetNumber}${additionalAddressInfo}`;
  const StreetAddressComponent = isDisplayableString(streetAddress) ? (
    <Text>{streetAddress}</Text>
  ) : null;

  const postalCode = isDisplayableString(address.postalCode)
    ? address.postalCode
    : '';
  const citySpace = isDisplayableString(postalCode) ? ' ' : '';
  const city = isDisplayableString(address.city)
    ? `${citySpace}${address.city}`
    : '';
  const locality = `${postalCode}${city}`;
  const LocalityComponent = isDisplayableString(locality) ? (
    <Text>{locality}</Text>
  ) : null;

  const countryComponent = isDisplayableString(address.country) ? (
    <Text>{address.country}</Text>
  ) : null;

  return (
    <CvListItem icon="locationDot" iconSize={10} isBottomSpacingEnabled={false}>
      <View>
        {StreetAddressComponent}
        {LocalityComponent}
        {countryComponent}
      </View>
    </CvListItem>
  );
}

type CvPersonDetailProps = {
  organization?: string | undefined;
  name?: Name | undefined;
  contact: Contact | undefined;
  color: string;
};

function CvPersonDetail({
  organization,
  name,
  contact,
}: CvPersonDetailProps): PdfViewElement {
  return (
    <View>
      {isDisplayableString(organization) && (
        <CvListItem>
          <Text style={{ textTransform: 'uppercase' }}>{organization}</Text>
        </CvListItem>
      )}

      {name !== undefined && <CvName name={name} />}

      {isDisplayableString(contact?.email) && (
        <CvListItem icon="envelope" iconSize={10}>
          <Text>{contact.email}</Text>
        </CvListItem>
      )}

      {isDisplayableString(contact?.phone) && (
        <CvListItem icon="phone" iconSize={10}>
          <Text>{contact.phone}</Text>
        </CvListItem>
      )}

      {contact?.postalAddress !== undefined && (
        <CvPostalAddress address={contact.postalAddress} />
      )}
    </View>
  );
}

export default CvPersonDetail;
