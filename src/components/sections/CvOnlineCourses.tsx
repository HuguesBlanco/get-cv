import { CvData } from '../../services/cvServiceTypes';
import CvLearning from '../elements/CvLearning';
import CvParagraph from '../primitives/CvParagraph';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvOnlineCoursesProps = { cvData: CvData };

function CvOnlineCourses({ cvData }: CvOnlineCoursesProps): PdfViewElement {
  return (
    <CvSection title="Online courses">
      {cvData.onlineCourses.map((courseData, index) => {
        const isLastCourse = index === cvData.onlineCourses.length - 1;

        return (
          <CvParagraph
            key={courseData.credentialId}
            isBottomSpacingEnabled={!isLastCourse}
          >
            <CvLearning
              title={courseData.course}
              learningProvider={courseData.platform}
            />
          </CvParagraph>
        );
      })}
    </CvSection>
  );
}

export default CvOnlineCourses;
