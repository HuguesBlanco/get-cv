import { Text, View } from '@react-pdf/renderer';
import { Language } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvLanguageProps = {
  language: Language;
};

function CvLanguage({ language }: CvLanguageProps): PdfViewElement {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ width: '30%', fontWeight: 'bold' }}>{language.name}</Text>

      <Text style={{ width: '70 %' }}>{language.level}</Text>
    </View>
  );
}

export default CvLanguage;
