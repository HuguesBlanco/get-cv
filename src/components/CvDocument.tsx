import { Document, Font, Page, View } from '@react-pdf/renderer';
import { getCv } from '../services/cvService';
import CvHeader from './CvHeader';
import CvContact from './sections/CvContact';
import CvEducation from './sections/CvEducation';
import CvLanguages from './sections/CvLanguages';
import CvOnlineCourses from './sections/CvOnlineCourses';
import CvSkills from './sections/CvSkills';
import CvWorkExperience from './sections/CvWorkExperience';
import { PdfDocumentElement } from './types';

function CvDocument(): PdfDocumentElement {
  const cv = getCv();

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

  const partMarginBottom = '10mm';
  const slotPaddingX = '5mm';
  const color = '#a3c3e4';

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
        <View style={{ margin: '10mm' }}>
          <View id="part-1" style={{ marginBottom: partMarginBottom }}>
            <View id="slot-1">
              <CvHeader cv={cv} color={color} />
            </View>
          </View>

          <View
            id="part-2"
            style={{ flexDirection: 'row', marginBottom: partMarginBottom }}
          >
            <View
              id="slot-2"
              style={{
                borderRight: `0.4mm solid ${color}`,
                paddingLeft: slotPaddingX,
                paddingRight: slotPaddingX,
                width: '33.333%',
                justifyContent: 'space-between',
              }}
            >
              <CvContact contact={cv.contact} color={color} />

              <CvSkills skills={cv.skills} color={color} />

              <CvLanguages languages={cv.languages} color={color} />
            </View>

            <View
              id="slot-3"
              style={{
                paddingLeft: slotPaddingX,
                paddingRight: slotPaddingX,
                width: '66.666%',
              }}
            >
              <CvWorkExperience companies={cv.companies} color={color} />
            </View>
          </View>

          <View
            id="part-3"
            style={{ flexDirection: 'row', marginBottom: partMarginBottom }}
          >
            <View
              id="slot-4"
              style={{
                paddingLeft: slotPaddingX,
                paddingRight: slotPaddingX,
                width: '33.333%',
              }}
            >
              <CvOnlineCourses onlineCourses={cv.onlineCourses} color={color} />
            </View>

            <View
              id="slot-5"
              style={{
                paddingLeft: slotPaddingX,
                paddingRight: slotPaddingX,
                width: '66.666%',
              }}
            >
              <CvEducation
                educationAchievements={cv.educationAchievements}
                color={color}
              />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CvDocument;
