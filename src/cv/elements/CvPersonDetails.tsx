import { Text, View } from '@react-pdf/renderer';
import CvIcon from '../primitives/CvIcon';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { Contact, Name, PostalAddress } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type OrganizationItemProps = {
  name: string;
};

function OrganizationItem({ name }: OrganizationItemProps): PdfViewElement {
  return (
    <CvListItem>
      <Text style={{ textTransform: 'uppercase' }}>{name}</Text>
    </CvListItem>
  );
}

type NameItemProps = {
  name: Name;
};

function NameItem({ name }: NameItemProps): PdfViewElement | null {
  const { firstName, lastName } = name;

  if (firstName === undefined && lastName === undefined) {
    return null;
  }

  const spaceBetweenNames =
    firstName !== undefined && lastName !== undefined ? ' ' : '';
  const nameDisplay = `${firstName ?? ''}${spaceBetweenNames}${lastName ?? ''}`;

  return (
    <CvListItem>
      <Text style={{ fontWeight: 'bold' }}>{nameDisplay}</Text>
    </CvListItem>
  );
}

type ContactItemProps = {
  icon: 'envelope' | 'phone';
  text: string;
  iconPadding: string;
};

function ContactItem({
  icon,
  text,
  iconPadding,
}: ContactItemProps): PdfViewElement | null {
  return (
    <CvListItem>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: iconPadding, justifyContent: 'center' }}>
          <CvIcon icon={icon} size={10} />
        </View>
        <Text>{text}</Text>
      </View>
    </CvListItem>
  );
}

type PostalAddressItemProps = {
  postalAddress: PostalAddress;
  iconPadding: string;
};

function PostalAddressItem({
  postalAddress,
  iconPadding,
}: PostalAddressItemProps): PdfViewElement {
  return (
    <CvListItem isBottomSpacingEnabled={false}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: iconPadding, justifyContent: 'center' }}>
            <CvIcon icon="locationDot" size={10} />
          </View>
          <Text>
            {postalAddress.streetNumber} {postalAddress.streetName}
            {postalAddress.additionalAddressInfo !== undefined
              ? ` ${postalAddress.additionalAddressInfo}`
              : ''}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: iconPadding }} />
          <Text>
            {postalAddress.postalCode !== undefined
              ? `${postalAddress.postalCode} `
              : ''}
            {postalAddress.city}
          </Text>
        </View>

        {postalAddress.country !== undefined && (
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: iconPadding }} />
            <Text>{postalAddress.country}</Text>
          </View>
        )}
      </View>
    </CvListItem>
  );
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
  const iconPadding = '5mm';

  return (
    <View>
      {title !== undefined && <CvTitle1 color={color}>{title}</CvTitle1>}

      {organization !== undefined && <OrganizationItem name={organization} />}

      {name !== undefined && <NameItem name={name} />}

      {contact.email !== undefined && (
        <ContactItem
          icon="envelope"
          text={contact.email}
          iconPadding={iconPadding}
        />
      )}

      {contact.phone !== undefined && (
        <ContactItem
          icon="phone"
          text={contact.phone}
          iconPadding={iconPadding}
        />
      )}

      {contact.postalAddress !== undefined && (
        <PostalAddressItem
          postalAddress={contact.postalAddress}
          iconPadding={iconPadding}
        />
      )}
    </View>
  );
}

export default CvPersonDetail;
