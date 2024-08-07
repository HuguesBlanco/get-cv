import { Skill } from '../../services/cvServiceTypes';
import CvListItem from '../primitives/CvListItem';
import CvSection from '../primitives/CvSection';
import { PdfViewElement } from '../types';

type CvSkillsProps = {
  skills: Skill[];
};

function CvSkills({ skills }: CvSkillsProps): PdfViewElement {
  return (
    <CvSection title="Skills">
      {skills.map((skill) => (
        <CvListItem key={skill} content={skill} />
      ))}
    </CvSection>
  );
}

export default CvSkills;
