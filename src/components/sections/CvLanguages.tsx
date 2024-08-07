import { Language } from '../../services/cvServiceTypes';
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
      {languages.map((language, index) => {
        const isLastLanguage = index === languages.length - 1;

        return (
          <CvListItem
            key={language.name}
            isBottomSpacingEnabled={!isLastLanguage}
          >
            <CvLanguage language={language} />
          </CvListItem>
        );
      })}
    </CvSection>
  );
}

export default CvLanguages;
