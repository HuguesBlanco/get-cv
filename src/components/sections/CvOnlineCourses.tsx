import { OnlineCourse } from '../../services/cvServiceTypes';
import { isLastElement } from '../../utils/arrayUtils';
import CvLearning from '../elements/CvLearning';
import CvListItem from '../primitives/CvListItem';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvOnlineCoursesProps = { onlineCourses: OnlineCourse[] };

function CvOnlineCourses({
  onlineCourses,
}: CvOnlineCoursesProps): PdfViewElement {
  return (
    <CvSection title="Online courses">
      {onlineCourses.map((course, index) => {
        return (
          <CvListItem
            key={course.credentialId}
            isBottomSpacingEnabled={!isLastElement(index, onlineCourses)}
          >
            <CvLearning
              title={course.name}
              learningProvider={course.platform}
            />
          </CvListItem>
        );
      })}
    </CvSection>
  );
}

export default CvOnlineCourses;
