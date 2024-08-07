import { EducationAchievement } from '../../services/cvServiceTypes';
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
      {educationAchievements.map((achievement, index) => {
        const isLastAchievment = index === educationAchievements.length - 1;

        return (
          <CvListItem
            key={achievement.title}
            isBottomSpacingEnabled={!isLastAchievment}
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
        );
      })}
    </CvSection>
  );
}

export default CvEducation;
