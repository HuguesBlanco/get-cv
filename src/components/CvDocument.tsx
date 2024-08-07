import { Document, Font, Page, View } from '@react-pdf/renderer';
import { getCvData } from '../services/cvService';
import CvHeader from './CvHeader';
import CvContact from './sections/CvContact';
import CvEducation from './sections/CvEducation';
import CvLanguages from './sections/CvLanguages';
import CvOnlineCourses from './sections/CvOnlineCourses';
import CvSkills from './sections/CvSkills';
import CvWorkExperience from './sections/CvWorkExperience';
import { PdfDocumentElement } from './types';

function CvDocument(): PdfDocumentElement {
  const cvData = getCvData();

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

  const sectionPaddingX = '5mm';

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
          <View>
            <CvHeader cvData={cvData} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                borderRight: '0.4mm solid #a3c3e4',
                paddingLeft: sectionPaddingX,
                paddingRight: sectionPaddingX,
                width: '33.333%',
              }}
            >
              <CvContact contact={cvData.contact} />

              <CvSkills skills={cvData.skills} />

              <CvLanguages languages={cvData.languages} />
            </View>

            <View
              style={{
                paddingLeft: sectionPaddingX,
                paddingRight: sectionPaddingX,
                width: '66.666%',
              }}
            >
              <CvWorkExperience companies={cvData.companies} />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                paddingLeft: sectionPaddingX,
                paddingRight: sectionPaddingX,
                width: '33.333%',
              }}
            >
              <CvOnlineCourses onlineCourses={cvData.onlineCourses} />
            </View>

            <View
              style={{
                paddingLeft: sectionPaddingX,
                paddingRight: sectionPaddingX,
                width: '66.666%',
              }}
            >
              <CvEducation
                educationAchievements={cvData.educationAchievements}
              />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CvDocument;
