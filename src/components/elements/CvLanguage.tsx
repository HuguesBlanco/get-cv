import { Text, View } from '@react-pdf/renderer';
import { Language } from '../../services/cvServiceTypes';
import { PdfViewElement } from '../types';

type CvLanguageProps = {
  language: Language;
};

function CvLanguage({ language }: CvLanguageProps): PdfViewElement {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ width: '25%', fontWeight: 'bold' }}>
        {language.language}
      </Text>

      <Text style={{ width: '75 %' }}>{language.level}</Text>
    </View>
  );
}

export default CvLanguage;
