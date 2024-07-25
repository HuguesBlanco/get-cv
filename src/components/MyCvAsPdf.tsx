import { Document, Font, Page, Text, View } from '@react-pdf/renderer';
import { getCvData } from '../services/cvService';
import CvHeader from './CvHeader';

export default function MyCvAsPdf(): JSX.Element {
  const cvData = getCvData();

  Font.register({
    family: 'Source Sans 3',
    fonts: [
      {
        src: 'src/assets/SourceSans3-Regular.ttf',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
    ],
  });

  return (
    <Document
      style={{
        fontFamily: 'Source Sans 3',
      }}
    >
      <Page size="A4">
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
              <Text>profileDetails</Text>
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
