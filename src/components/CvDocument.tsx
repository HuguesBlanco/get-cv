import { Document, Font, Text } from '@react-pdf/renderer';
import { getCv } from '../services/cvService';
import { Languages } from '../types';
import CvPage from './primitives/CvPage';
import CvPart from './primitives/CvPart';
import CvSlot from './primitives/CvSlot';
import CvContact from './sections/CvContact';
import CvEducation from './sections/CvEducation';
import CvGithub from './sections/CvGithub';
import CvHeader from './sections/CvHeader';
import CvLanguages from './sections/CvLanguages';
import CvOnlineCourses from './sections/CvOnlineCourses';
import CvSkills from './sections/CvSkills';
import CvWorkExperience from './sections/CvWorkExperience';
import { PdfDocumentElement } from './types';

type CvDocumentProps = {
  language: Languages;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
};

function CvDocument({
  language,
  isCvIncluded,
  isCoverLetterIncluded,
}: CvDocumentProps): PdfDocumentElement {
  const cv = getCv(language);

  Font.registerHyphenationCallback((word) => [word]);

  const COLOR = '#4b6f96';

  return (
    <Document>
      {isCvIncluded && (
        <CvPage>
          <CvPart>
            <CvSlot>
              <CvHeader cv={cv} color={COLOR} />
            </CvSlot>
          </CvPart>

          <CvPart layoutDirection="horizontal">
            <CvSlot
              widthPercentage={33.333}
              isBorderRightVisible={true}
              borderColor={COLOR}
            >
              <CvContact contact={cv.contact} color={COLOR} />
              <CvSkills skills={cv.skills} color={COLOR} language={language} />
              <CvLanguages languages={cv.languages} color={COLOR} />
            </CvSlot>

            <CvSlot widthPercentage={66.666}>
              <CvWorkExperience companies={cv.companies} color={COLOR} />
            </CvSlot>
          </CvPart>

          <CvPart layoutDirection="horizontal">
            <CvSlot widthPercentage={33.333}>
              <CvOnlineCourses onlineCourses={cv.onlineCourses} color={COLOR} />
            </CvSlot>

            <CvSlot widthPercentage={66.666}>
              <CvEducation
                educationAchievements={cv.educationAchievements}
                color={COLOR}
              />
            </CvSlot>
          </CvPart>

          <CvPart>
            <CvSlot>
              <CvGithub language={language} color={COLOR} />
            </CvSlot>
          </CvPart>
        </CvPage>
      )}
      {isCoverLetterIncluded && (
        <CvPage>
          <Text>Cover letter</Text>
        </CvPage>
      )}
    </Document>
  );
}

export default CvDocument;
