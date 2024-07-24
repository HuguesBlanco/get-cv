import { Document, Page, Text, View } from '@react-pdf/renderer';

export default function MyCvAsPdf(): JSX.Element {
  return (
    <Document>
      <Page size="A4">
        <View style={{ margin: '10mm' }}>
          <View>
            <Text>header</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '33.333%' }}>
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
