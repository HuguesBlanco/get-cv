import { Document, Font, Page, Text, View } from '@react-pdf/renderer';
import { getCvData } from '../services/cvService';
import CvContact from './CvContact';
import CvHeader from './CvHeader';

function MyCvAsPdf(): JSX.Element {
  const cvData = getCvData();

  Font.register({
    family: 'Source Sans 3',
    fonts: [
      {
        src: 'src/assets/SourceSans3-Light.ttf',
        fontStyle: 'normal',
        fontWeight: 'light',
      },
      {
        src: 'src/assets/SourceSans3-Regular.ttf',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      {
        src: 'src/assets/SourceSans3-Regular.ttf',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
    ],
  });

  return (
    <Document>
      <Page
        size="A4"
        // Note: It seems that applying the following styles to the <Document> instead of the <Page> causes some bugs with the font size.
        style={{
          fontFamily: 'Source Sans 3',
          fontSize: '10',
        }}
      >
        <View style={{ margin: '10mm' }}>
          <View>
            <CvHeader cvData={cvData} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: '33.333%',
                borderRight: '0.4mm solid #a3c3e4',
              }}
            >
              <CvContact cvData={cvData} />
            </View>

            <View style={{ width: '66.666%' }}>
              <Text>workExperience</Text>
            </View>
          </View>

          <View>
            <Text>educationalBackground</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default MyCvAsPdf;
