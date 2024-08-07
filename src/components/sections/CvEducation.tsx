import { EducationAchievement } from '../../services/cvServiceTypes';
import { isLastElement } from '../../utils/arrayUtils';
import CvLearning from '../elements/CvLearning';
import CvListItem from '../primitives/CvListItem';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvEducationProps = { educationAchievements: EducationAchievement[] };

function CvEducation({
  educationAchievements,
}: CvEducationProps): PdfViewElement {
  return (
    <CvSection title="Education">
      {educationAchievements.map((achievement, index) => (
        <CvListItem
          key={achievement.title}
          isBottomSpacingEnabled={!isLastElement(index, educationAchievements)}
        >
          <CvLearning
            title={achievement.title}
            learningProvider={achievement.institution}
            dateRange={{
              start: achievement.startDate,
              end: achievement.endDate,
            }}
          />
        </CvListItem>
      ))}
    </CvSection>
  );
}

export default CvEducation;
