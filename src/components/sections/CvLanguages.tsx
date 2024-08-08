import { View } from '@react-pdf/renderer';
import { Language } from '../../services/cvServiceTypes';
import { isLastElement } from '../../utils/arrayUtils';
import CvLanguage from '../elements/CvLanguage';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { PdfViewElement } from '../types';

type CvLanguagesProps = {
  languages: Language[];
  color: string;
};

function CvLanguages({ languages, color }: CvLanguagesProps): PdfViewElement {
  return (
    <View>
      <CvTitle1 color={color}>Languages</CvTitle1>

      {languages.map((language, index) => (
        <CvListItem
          key={language.name}
          isBottomSpacingEnabled={!isLastElement(index, languages)}
        >
          <CvLanguage language={language} />
        </CvListItem>
      ))}
    </View>
  );
}

export default CvLanguages;
