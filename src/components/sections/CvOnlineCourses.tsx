import { OnlineCourse } from '../../services/cvServiceTypes';
import CvLearning from '../elements/CvLearning';
import CvParagraph from '../primitives/CvParagraph';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvOnlineCoursesProps = { onlineCourses: OnlineCourse[] };

function CvOnlineCourses({
  onlineCourses: onlineCourses,
}: CvOnlineCoursesProps): PdfViewElement {
  return (
    <CvSection title="Online courses">
      {onlineCourses.map((course, index) => {
        const isLastCourse = index === onlineCourses.length - 1;

        return (
          <CvParagraph
            key={course.credentialId}
            isBottomSpacingEnabled={!isLastCourse}
          >
            <CvLearning
              title={course.name}
              learningProvider={course.platform}
            />
          </CvParagraph>
        );
      })}
    </CvSection>
  );
}

export default CvOnlineCourses;
