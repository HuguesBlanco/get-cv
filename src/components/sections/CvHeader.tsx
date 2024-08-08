import { Image, Text, View } from '@react-pdf/renderer';
import { Cv } from '../../services/cvServiceTypes';
import { PdfViewElement } from '../types';

type CvHeaderProps = { cv: Cv; color: string };

function CvHeader({ cv, color }: CvHeaderProps): PdfViewElement {
  const IMAGE_SIZE = '33mm';

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text
            style={{
              fontSize: '20pt',
              letterSpacing: '9',
              lineHeight: 1.1, // 1 = 100%, cf. https://github.com/diegomura/react-pdf/issues/2369
              textTransform: 'uppercase',
            }}
          >
            {cv.name.firstName}
          </Text>
          <Text
            style={{
              color: color,
              fontSize: '40pt',
              fontWeight: 'light',
              letterSpacing: '2.5',
              marginLeft: '-2',
              textTransform: 'uppercase',
            }}
          >
            {cv.name.lastName}
          </Text>
          <Text
            style={{
              fontSize: '11pt',
              letterSpacing: '1',
              marginLeft: '56.5mm',
            }}
          >
            {cv.objective}
          </Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: color,
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
                opacity: 0.8,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CvHeader;
