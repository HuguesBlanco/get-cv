import { Text, View } from '@react-pdf/renderer';
import { Contact } from '../../services/cvServiceTypes';
import CvIcon from '../primitives/CvIcon';
import CvListItem from '../primitives/CvListItem';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvContactProps = { contact: Contact };

function CvContact({ contact }: CvContactProps): PdfViewElement {
  const leftSpace = '5mm';

  return (
    <CvSection title="Contact">
      <CvListItem>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
              justifyContent: 'center',
            }}
          >
            <CvIcon icon="envelope" size={10} />
          </View>
          <Text>{contact.email}</Text>
        </View>
      </CvListItem>

      <CvListItem>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
              justifyContent: 'center',
            }}
          >
            <CvIcon icon="phone" size={10} />
          </View>
          <Text>{contact.phone}</Text>
        </View>
      </CvListItem>

      <CvListItem isBottomSpacingEnabled={false}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: leftSpace,
                justifyContent: 'center',
              }}
            >
              <CvIcon icon="locationDot" size={10} />
            </View>
            <Text>{`${contact.postalAddress.streetNumber} ${contact.postalAddress.streetName} ${contact.postalAddress.additionalAddressInfo}`}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: leftSpace,
              }}
            ></View>
            <Text>{`${contact.postalAddress.postalCode} ${contact.postalAddress.city}`}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: leftSpace,
              }}
            ></View>
            <Text>{contact.postalAddress.country}</Text>
          </View>
        </View>
      </CvListItem>
    </CvSection>
  );
}

export default CvContact;
