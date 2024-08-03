import { Language } from '../../services/cvServiceTypes';
import CvLanguage from '../elements/CvLanguage';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvLanguagesProps = {
  languagesData: Language[];
};

function CvLanguages({ languagesData }: CvLanguagesProps): PdfViewElement {
  return (
    <CvSection title="Languages">
      {languagesData.map((languageData) => (
        <CvLanguage key={languageData.language} languageData={languageData} />
      ))}
    </CvSection>
  );
}

export default CvLanguages;
