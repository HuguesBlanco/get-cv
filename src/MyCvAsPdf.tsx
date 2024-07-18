import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

export default function MyCvAsPdf(): JSX.Element {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
    },
    section: {
      margin: 10,
      padding: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}
