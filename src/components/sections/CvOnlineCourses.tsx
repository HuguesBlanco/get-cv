import { CvData } from '../../services/cvServiceTypes';
import CvLearning from '../elements/CvLearning';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvOnlineCoursesProps = { cvData: CvData };

function CvOnlineCourses({ cvData }: CvOnlineCoursesProps): PdfViewElement {
  return (
    <CvSection title="Online courses">
      {cvData.onlineCourses.map((courseData) => (
        <CvLearning
          key={courseData.credentialId}
          title={courseData.course}
          learningProvider={courseData.platform}
        />
      ))}
    </CvSection>
  );
}

export default CvOnlineCourses;
