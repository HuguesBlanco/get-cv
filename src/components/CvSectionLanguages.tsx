import { View } from '@react-pdf/renderer';
import { Language } from '../services/cvServiceTypes';
import CvLanguage from './CvLanguage';
import CvTitle1 from './CvTitle1';
import { PdfViewElement } from './types';

type CvSectionLanguagesProps = {
  languagesData: Language[];
};

function CvSectionLanguages({
  languagesData,
}: CvSectionLanguagesProps): PdfViewElement {
  return (
    <View>
      <CvTitle1>Languages</CvTitle1>

      {languagesData.map((languageData) => (
        <CvLanguage key={languageData.language} languageData={languageData} />
      ))}
    </View>
  );
}

export default CvSectionLanguages;
