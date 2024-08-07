import { Language } from '../../services/cvServiceTypes';
import { isLastElement } from '../../utils/arrayUtils';
import CvLanguage from '../elements/CvLanguage';
import CvListItem from '../primitives/CvListItem';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvLanguagesProps = {
  languages: Language[];
};

function CvLanguages({ languages }: CvLanguagesProps): PdfViewElement {
  return (
    <CvSection title="Languages">
      {languages.map((language, index) => (
        <CvListItem
          key={language.name}
          isBottomSpacingEnabled={!isLastElement(index, languages)}
        >
          <CvLanguage language={language} />
        </CvListItem>
      ))}
    </CvSection>
  );
}

export default CvLanguages;
