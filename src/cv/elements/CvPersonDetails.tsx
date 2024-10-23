import { Text, View } from '@react-pdf/renderer';
import CvListItem from '../primitives/CvListItem';
import { Contact, Name, PostalAddress } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

function isDisplayable(value: string | undefined): value is string {
  return !(value === undefined || value === '');
}

type CvNameProps = {
  name: Name;
};

function CvName({ name }: CvNameProps): React.JSX.Element | null {
  const firstName = isDisplayable(name.firstName) ? name.firstName : '';
  const lastNameSpace = isDisplayable(firstName) ? ' ' : '';
  const lastName = isDisplayable(name.lastName)
    ? `${lastNameSpace}${name.lastName}`
    : '';
  const fullName = `${firstName}${lastName}`;

  if (isDisplayable(fullName)) {
    return (
      <CvListItem>
        <Text style={{ fontWeight: 'bold' }}>{fullName}</Text>
      </CvListItem>
    );
  }

  return null;
}

type CvPostalAddressProps = {
  address: PostalAddress;
};

function CvPostalAddress({
  address,
}: CvPostalAddressProps): PdfViewElement | null {
  const streetName = isDisplayable(address.streetName)
    ? address.streetName
    : '';
  const streetNumberSpace = isDisplayable(streetName) ? ' ' : '';
  const streetNumber = isDisplayable(address.streetNumber)
    ? `${streetNumberSpace}${address.streetNumber}`
    : '';
  const additionalAddressInfoSpace =
    isDisplayable(streetName) || isDisplayable(streetNumber) ? ' ' : '';
  const additionalAddressInfo = isDisplayable(address.additionalAddressInfo)
    ? `${additionalAddressInfoSpace}${address.additionalAddressInfo}`
    : '';
  const streetAddress = `${streetName}${streetNumber}${additionalAddressInfo}`;
  const StreetAddressComponent = isDisplayable(streetAddress) ? (
    <Text>{streetAddress}</Text>
  ) : null;

  const postalCode = isDisplayable(address.postalCode)
    ? address.postalCode
    : '';
  const citySpace = isDisplayable(postalCode) ? ' ' : '';
  const city = isDisplayable(address.city) ? `${citySpace}${address.city}` : '';
  const locality = `${postalCode}${city}`;
  const LocalityComponent = isDisplayable(locality) ? (
    <Text>{locality}</Text>
  ) : null;

  const countryComponent = isDisplayable(address.country) ? (
    <Text>{address.country}</Text>
  ) : null;

  const isComponentDisplayable =
    StreetAddressComponent !== null ||
    LocalityComponent !== null ||
    countryComponent !== null;

  if (isComponentDisplayable) {
    return (
      <CvListItem
        icon="locationDot"
        iconSize={10}
        isBottomSpacingEnabled={false}
      >
        <View>
          {StreetAddressComponent}
          {LocalityComponent}
          {countryComponent}
        </View>
      </CvListItem>
    );
  }

  return null;
}

type CvPersonDetailProps = {
  organization?: string;
  name?: Name;
  contact: Contact;
  color: string;
};

function CvPersonDetail({
  organization,
  name,
  contact,
}: CvPersonDetailProps): PdfViewElement {
  return (
    <View>
      {isDisplayable(organization) && (
        <CvListItem>
          <Text style={{ textTransform: 'uppercase' }}>{organization}</Text>
        </CvListItem>
      )}

      {name !== undefined && <CvName name={name} />}

      {isDisplayable(contact.email) && (
        <CvListItem icon="envelope" iconSize={10}>
          <Text>{contact.email}</Text>
        </CvListItem>
      )}

      {isDisplayable(contact.phone) && (
        <CvListItem icon="phone" iconSize={10}>
          <Text>{contact.phone}</Text>
        </CvListItem>
      )}

      {contact.postalAddress !== undefined && (
        <CvPostalAddress address={contact.postalAddress} />
      )}
    </View>
  );
}

export default CvPersonDetail;
