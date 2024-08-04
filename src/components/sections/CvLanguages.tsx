import { Language } from '../../services/cvServiceTypes';
import CvLanguage from '../elements/CvLanguage';
import CvParagraph from '../primitives/CvParagraph';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvLanguagesProps = {
  languagesData: Language[];
};

function CvLanguages({ languagesData }: CvLanguagesProps): PdfViewElement {
  return (
    <CvSection title="Languages">
      {languagesData.map((languageData, index) => {
        const isLastLanguage = index === languagesData.length - 1;
        return (
          <CvParagraph
            key={languageData.language}
            isBottomSpacingEnabled={!isLastLanguage}
          >
            <CvLanguage languageData={languageData} />
          </CvParagraph>
        );
      })}
    </CvSection>
  );
}

export default CvLanguages;
