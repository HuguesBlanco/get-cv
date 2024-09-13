import { Document, Font, Text, View } from '@react-pdf/renderer';
import { getCv } from '../services/cvService';
import { Languages } from '../types';
import CvPage from './primitives/CvPage';
import CvPart from './primitives/CvPart';
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

  const SLOTS_MARGIN_X = '5mm';
  const COLOR = '#4b6f96';

  return (
    <Document>
      {isCvIncluded && (
        <CvPage>
          <CvPart>
            <View
              id="slot-1"
              style={{
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
              }}
            >
              <CvHeader cv={cv} color={COLOR} />
            </View>
          </CvPart>

          <CvPart layoutDirection="horizontal">
            <View
              id="slot-2"
              style={{
                borderRight: `0.4mm solid ${COLOR}`,
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
                width: '33.333%',
                justifyContent: 'space-between',
              }}
            >
              <CvContact contact={cv.contact} color={COLOR} />

              <CvSkills skills={cv.skills} color={COLOR} language={language} />

              <CvLanguages languages={cv.languages} color={COLOR} />
            </View>

            <View
              id="slot-3"
              style={{
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
                width: '66.666%',
              }}
            >
              <CvWorkExperience companies={cv.companies} color={COLOR} />
            </View>
          </CvPart>

          <CvPart layoutDirection="horizontal">
            <View
              id="slot-4"
              style={{
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
                width: '33.333%',
              }}
            >
              <CvOnlineCourses onlineCourses={cv.onlineCourses} color={COLOR} />
            </View>

            <View
              id="slot-5"
              style={{
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
                width: '66.666%',
              }}
            >
              <CvEducation
                educationAchievements={cv.educationAchievements}
                color={COLOR}
              />
            </View>
          </CvPart>

          <CvPart>
            <View
              id="slot-6"
              style={{
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
              }}
            >
              <CvGithub language={language} color={COLOR} />
            </View>
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
