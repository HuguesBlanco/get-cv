import { Image, Text, View } from '@react-pdf/renderer';
import { Cv } from '../../services/cvServiceTypes';
import { PdfViewElement } from '../types';

type CvHeaderProps = { cv: Cv; color: string };

function CvHeader({ cv, color }: CvHeaderProps): PdfViewElement {
  const IMAGE_SIZE = '35mm';

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: '21pt', letterSpacing: '5' }}>
            {cv.name.firstName}
          </Text>
          <Text
            style={{
              color: color,
              fontSize: '42pt',
              fontWeight: 'light',
              letterSpacing: '2',
              margin: '-2pt',
              textTransform: 'uppercase',
            }}
          >
            {cv.name.lastName}
          </Text>
          <Text
            style={{ fontSize: '11pt', letterSpacing: '1', marginLeft: '59mm' }}
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
                opacity: 0.9,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CvHeader;
