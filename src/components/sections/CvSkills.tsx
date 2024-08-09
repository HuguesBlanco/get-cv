import { View } from '@react-pdf/renderer';
import { Skill } from '../../services/cvServiceTypes';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { PdfViewElement } from '../types';

/**
 * Filters out a predefined set of skills from the original list to make it fit in the CV.
 * This allows the full list to be used elsewhere, such as on a website.
 * @param allSkills The complete list of skills from the original data.
 * @returns A list of skills excluding the predefined set of skills to remove.
 */
function filterSkillsForCv(allSkills: Skill[]): Skill[] {
  const SKILLS_TO_REMOVE: Skill[] = [
    'JavaScript',
    'Scrum',
    'Adaptability',
    'Data Marketing Strategy',
    'Operational Leadership',
    'Client Relationship Management',
    'Project Management',
    'email Marketing',
    'Retargeting',
    'Performance Tracking',
    'Graphic Design',
    'Adobe Suite',
    'WordPress',
    'Creativity',
    'Layout Design',
  ];

  const allSkillsNormalized = SKILLS_TO_REMOVE.map((skill) =>
    skill.toLowerCase(),
  );

  return allSkills.filter((skill) => {
    const skillNormalized = skill.toLowerCase();

    const isSkillToRemove = allSkillsNormalized.includes(skillNormalized);

    if (isSkillToRemove) return false;
    return true;
  });
}

/**
 * Combines "HTML" and "CSS" into a single entry "HTML/CSS" in the list of skills.
 * This helps to save space in the CV while keeping the data separate in the source.
 * @param skills The list of skills.
 * @returns The list of skills with "HTML" and "CSS" combined into "HTML/CSS".
 */

function combineHtmlAndCss(skills: Skill[]): Skill[] {
  const filteredSkills = skills.filter((skill) => !/^(html|css)$/i.test(skill));
  const hasHtmlOrCss = skills.some((skill) => /^(html|css)$/i.test(skill));

  if (hasHtmlOrCss) {
    return [...filteredSkills, 'HTML/CSS'];
  }

  return filteredSkills;
}

type CvSkillsProps = {
  skills: Skill[];
  color: string;
};

function CvSkills({ skills, color }: CvSkillsProps): PdfViewElement {
  const skillsWithHtmlAndCssCombined = combineHtmlAndCss(skills);
  const reducedSkills = filterSkillsForCv(skillsWithHtmlAndCssCombined);

  return (
    <View>
      <CvTitle1 color={color}>Skills</CvTitle1>
      {reducedSkills.map((skill) => (
        <CvListItem key={skill} icon="circle" isBottomSpacingEnabled={false}>
          {skill}
        </CvListItem>
      ))}
    </View>
  );
}

export default CvSkills;
