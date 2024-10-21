import { View } from '@react-pdf/renderer';
import CvLanguage from '../elements/CvLanguage';
import { isLastElement } from '../libs/arrayUtils';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { Language, Languages } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type CvLanguagesProps = {
  /**
   * The list of known languages to display.
   */
  knownLanguages: Language[];
  /**
   * The language in which the CV is written.
   */
  language: Languages;
  color: string;
};

function CvLanguages({
  knownLanguages,
  language,
  color,
}: CvLanguagesProps): PdfViewElement {
  const title = language === Languages.FRENCH ? 'Langues' : 'Languages';

  return (
    <View>
      <CvTitle1 color={color}>{title}</CvTitle1>

      {knownLanguages.map((language, index) => (
        <CvListItem
          key={language.name}
          isBottomSpacingEnabled={!isLastElement(index, knownLanguages)}
        >
          <CvLanguage language={language} />
        </CvListItem>
      ))}
    </View>
  );
}

export default CvLanguages;
