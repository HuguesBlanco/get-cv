import { Language } from '../../services/cvServiceTypes';
import CvLanguage from '../elements/CvLanguage';
import CvParagraph from '../primitives/CvParagraph';
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
          <CvParagraph
            key={language.name}
            isBottomSpacingEnabled={!isLastLanguage}
          >
            <CvLanguage language={language} />
          </CvParagraph>
        );
      })}
    </CvSection>
  );
}

export default CvLanguages;
