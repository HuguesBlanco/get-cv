import { CvData } from '../../services/cvServiceTypes';
import CvLearning from '../elements/CvLearning';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvEducationProps = { cvData: CvData };

function CvEducation({ cvData }: CvEducationProps): PdfViewElement {
  return (
    <CvSection title="Education">
      {cvData.educationAchievements.map((achievement) => (
        <CvLearning
          key={achievement.title}
          title={achievement.title}
          learningProvider={achievement.institution}
          dateRange={{ start: achievement.startDate, end: achievement.endDate }}
        />
      ))}
    </CvSection>
  );
}

export default CvEducation;
