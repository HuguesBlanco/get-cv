import { Text, View } from '@react-pdf/renderer';
import { Language } from '../../services/cvServiceTypes';
import { PdfViewElement } from '../types';

type CvLanguageProps = {
  languageData: Language;
};

function CvLanguage({ languageData }: CvLanguageProps): PdfViewElement {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ width: '25%', fontWeight: 'bold' }}>
        {languageData.language}
      </Text>

      <Text style={{ width: '75 %' }}>{languageData.level}</Text>
    </View>
  );
}

export default CvLanguage;
