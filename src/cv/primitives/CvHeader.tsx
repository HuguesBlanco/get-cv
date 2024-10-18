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
  const IMAGE_SIZE = '26mm';
  const LINE_SPACING = '5mm';

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: '16pt',
              letterSpacing: '4',
              lineHeight: 0.7, // 1 = 100%, cf. https://github.com/diegomura/react-pdf/issues/2369
              textTransform: 'uppercase',
              verticalAlign: 'super',
              marginBottom: LINE_SPACING,
            }}
          >
            {preTitle}
          </Text>
          <Text
            style={{
              color: color,
              fontSize: '34pt',
              letterSpacing: '2',
              lineHeight: 0.6,
              fontWeight: 'light',
              textTransform: 'uppercase',
              verticalAlign: 'super',
              marginLeft: '-2.4',
              marginBottom: LINE_SPACING,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: '9pt',
              letterSpacing: '1.1',
              verticalAlign: 'sub',
              marginLeft: '56.5mm',
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
                opacity: 0.6,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default CvHeader;
