import { Image, Text, View } from '@react-pdf/renderer';
import { PdfViewElement } from '../types/pdfTypes';

type CvHeaderProps = {
  preTitle: string;
  title: string;
  imageSource?: string;
  tagline: string;
  color: string;
};

function CvHeader({
  title,
  preTitle,
  tagline,
  imageSource,
  color,
}: CvHeaderProps): PdfViewElement {
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
            {preTitle}
          </Text>
          <Text
            style={{
              color: color,
              fontSize: '40pt',
              fontWeight: 'light',
              letterSpacing: '2.5',
              marginLeft: '-2.4',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: '11pt',
              letterSpacing: '1',
              marginLeft: '58mm',
            }}
          >
            {tagline}
          </Text>
        </View>
        {imageSource !== undefined && (
          <View
            style={{
              backgroundColor: color,
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              borderRadius: '50%',
            }}
          >
            <Image
              src={imageSource}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: '50%',
                opacity: 0.8,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default CvHeader;
