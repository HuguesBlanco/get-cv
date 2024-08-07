import { EducationAchievement } from '../../services/cvServiceTypes';
import CvLearning from '../elements/CvLearning';
import CvParagraph from '../primitives/CvParagraph';
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
          <CvParagraph
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
          </CvParagraph>
        );
      })}
    </CvSection>
  );
}

export default CvEducation;
