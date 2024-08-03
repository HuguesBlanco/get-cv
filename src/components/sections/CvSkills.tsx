import { Skill } from '../../services/cvServiceTypes';
import CvListItem from '../primitives/CvListItem';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvSkillsProps = {
  skillsData: Skill[];
};

function CvSkills({ skillsData }: CvSkillsProps): PdfViewElement {
  return (
    <CvSection title="Skills">
      {skillsData.map((skill) => (
        <CvListItem key={skill} content={skill} />
      ))}
    </CvSection>
  );
}

export default CvSkills;
