import { Document, Font, Page, View } from '@react-pdf/renderer';
import { getCvData } from '../services/cvService';
import CvHeader from './CvHeader';
import CvSectionContact from './CvSectionContact';
import CvSectionEducation from './CvSectionEducation';
import CvSectionLanguages from './CvSectionLanguages';
import CvSectionOnlineCourses from './CvSectionOnlineCourses';
import CvSectionSkills from './CvSectionSkills';
import CvSectionWorkExperience from './CvSectionWorkExperience';
import { PdfDocumentElement } from './types';

function MyCvAsPdf(): PdfDocumentElement {
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
              <CvSectionContact cvData={cvData} />

              <CvSectionSkills skillsData={cvData.skills} />

              <CvSectionLanguages languagesData={cvData.languages} />
            </View>

            <View
              style={{
                paddingLeft: sectionPaddingX,
                paddingRight: sectionPaddingX,
                width: '66.666%',
              }}
            >
              <CvSectionWorkExperience cvData={cvData} />
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
              <CvSectionOnlineCourses cvData={cvData} />
            </View>

            <View
              style={{
                paddingLeft: sectionPaddingX,
                paddingRight: sectionPaddingX,
                width: '66.666%',
              }}
            >
              <CvSectionEducation cvData={cvData} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default MyCvAsPdf;
