import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { CvData } from '../services/cvServiceTypes';
import CvIcon from './CvIcon';
import CvParagraph from './CvParagraph';
import CvTitle1 from './CvTitle1';

type CvContactProps = { cvData: CvData };

function CvContact({ cvData }: CvContactProps): ReactElement<typeof View> {
  const leftSpace = '5mm';

  return (
    <View>
      <CvTitle1>Contact</CvTitle1>

      <CvParagraph>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
              justifyContent: 'center',
            }}
          >
            <CvIcon icon="envelope" size={10} />
          </View>
          <Text>{cvData.contact.email}</Text>
        </View>
      </CvParagraph>

      <CvParagraph>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
              justifyContent: 'center',
            }}
          >
            <CvIcon icon="phone" size={10} />
          </View>
          <Text>{cvData.contact.phone}</Text>
        </View>
      </CvParagraph>

      <CvParagraph>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
              justifyContent: 'center',
            }}
          >
            <CvIcon icon="locationDot" size={10} />
          </View>
          <Text>{`${cvData.contact.postalAddress.streetNumber} ${cvData.contact.postalAddress.streetName} ${cvData.contact.postalAddress.additionalAddressInfo}`}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
            }}
          ></View>
          <Text>{`${cvData.contact.postalAddress.postalCode} ${cvData.contact.postalAddress.city}`}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: leftSpace,
            }}
          ></View>
          <Text>{cvData.contact.postalAddress.country}</Text>
        </View>
      </CvParagraph>
    </View>
  );
}

export default CvContact;
