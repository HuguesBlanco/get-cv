import { Image, Text, View } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';
import CvSectionContainer from './CvSectionContainer';

type CvHeaderProps = { cvData: CvData };

function CvHeader({ cvData }: CvHeaderProps): JSX.Element {
  const COLOR = '#a3c3e4';
  const IMAGE_SIZE = '35mm';

  return (
    <CvSectionContainer>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: '21pt', letterSpacing: '5' }}>
            {cvData.name.firstName}
          </Text>
          <Text
            style={{
              color: COLOR,
              fontSize: '42pt',
              letterSpacing: '2',
              margin: '-2pt',
              textTransform: 'uppercase',
            }}
          >
            {cvData.name.lastName}
          </Text>
          <Text
            style={{ fontSize: '11pt', letterSpacing: '1', marginLeft: '59mm' }}
          >
            {cvData.objective}
          </Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: COLOR,
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              borderRadius: '50%',
            }}
          >
            <Image
              src={'src/assets/photo-cv.jpg'}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: '50%',
                opacity: 0.9,
              }}
            />
          </View>
        </View>
      </View>
    </CvSectionContainer>
  );
}

export default CvHeader;
