import { Document, Font, Page, View } from '@react-pdf/renderer';
import { getCv } from '../services/cvService';
import { Languages } from '../types';
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
};

function CvDocument({ language }: CvDocumentProps): PdfDocumentElement {
  const cv = getCv(language);

  Font.register({
    family: 'Source Sans 3',
    fonts: [
      {
        src: 'src/assets/SourceSans3-Light.ttf',
        fontStyle: 'normal',
        fontWeight: 'light',
      },
      {
        src: 'src/assets/SourceSans3-Regular.ttf',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      {
        src: 'src/assets/SourceSans3-Bold.ttf',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
    ],
  });

  Font.registerHyphenationCallback((word) => [word]);

  const DOCUMENT_MARGIN_TOP = '8mm';
  const DOCUMENT_MARGIN_X = '8mm';
  const DOCUMENT_MARGIN_BOTTOM = '2mm';

  const PARTS_MARGIN_BOTTOM = '10mm';
  const SLOTS_MARGIN_X = '5mm';
  const COLOR = '#4b6f96';

  return (
    <Document>
      <Page
        size="A4"
        // Note: It seems that applying the following styles to the <Document> instead of the <Page> causes some bugs with the font size.
        style={{
          fontFamily: 'Source Sans 3',
          fontSize: '9',
        }}
      >
        <View
          style={{
            marginTop: DOCUMENT_MARGIN_TOP,
            marginLeft: DOCUMENT_MARGIN_X,
            marginRight: DOCUMENT_MARGIN_X,
            marginBottom: DOCUMENT_MARGIN_BOTTOM,
          }}
        >
          <View id="part-1" style={{ marginBottom: PARTS_MARGIN_BOTTOM }}>
            <View
              id="slot-1"
              style={{
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
              }}
            >
              <CvHeader cv={cv} color={COLOR} />
            </View>
          </View>

          <View
            id="part-2"
            style={{ flexDirection: 'row', marginBottom: PARTS_MARGIN_BOTTOM }}
          >
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
          </View>

          <View
            id="part-3"
            style={{ flexDirection: 'row', marginBottom: PARTS_MARGIN_BOTTOM }}
          >
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
          </View>
          <View id="part-4">
            <View
              id="slot-6"
              style={{
                marginLeft: SLOTS_MARGIN_X,
                marginRight: SLOTS_MARGIN_X,
              }}
            >
              <CvGithub color={COLOR} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CvDocument;
