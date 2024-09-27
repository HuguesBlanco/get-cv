import { View } from '@react-pdf/renderer';
import CvListItem from '../primitives/CvListItem';
import CvTitle1 from '../primitives/CvTitle1';
import { Languages, Skill } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

/**
 * Filters out a predefined set of skills from the original list to make it fit in the CV.\
 * This allows the full list to be used elsewhere, such as on a website.
 * @param allSkills The complete list of skills from the original data.
 * @returns A list of skills excluding the predefined set of skills to remove.
 */
function filterSkillsForCv(allSkills: Skill[], language: Languages): Skill[] {
  const skillsToRemove: string[] =
    language === Languages.ENGLISH
      ? [
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
        ]
      : [
          'Scrum',
          'Adaptabilité',
          'Stratégie de data marketing',
          'Leadership opérationnel',
          'Gestion de la relation client',
          'Gestion de projets',
          'Marketing email',
          'Retargeting',
          'Suivi des performances',
          'Design graphique',
          'Suite Adobe',
          'WordPress',
          'Créativité',
          'Mise en page',
        ];
  const normalizedSkillsToRemove = skillsToRemove.map((skill) =>
    skill.toLowerCase(),
  );

  return allSkills.filter((skill) => {
    const normalizedSkill = skill.toLowerCase();
    return !normalizedSkillsToRemove.includes(normalizedSkill);
  });
}

/**
 * Combines "HTML" and "CSS" into a single entry "HTML/CSS" in the list of skills.\
 * Also combines "JavaScript" and "TypeScript" into "JavaScript/TypeScript".\
 * This helps to save space in the CV while keeping the data separate in the source.
 * @param skills The list of skills.
 * @returns The list of skills with combined entries.
 */
function combineSkills(skills: Skill[]): Skill[] {
  const filteredSkills = skills.filter(
    (skill) => !/^(html|css|javascript|typescript)$/i.test(skill),
  );

  const hasHtmlOrCss = skills.some((skill) => /^(html|css)$/i.test(skill));
  const hasJavaScriptOrTypeScript = skills.some((skill) =>
    /^(javascript|typescript)$/i.test(skill),
  );

  const combinedSkills = [
    ...(hasJavaScriptOrTypeScript ? ['JavaScript/TypeScript'] : []),
    ...(hasHtmlOrCss ? ['HTML/CSS'] : []),
    ...filteredSkills,
  ];

  return combinedSkills;
}

type CvSkillsProps = {
  skills: Skill[];
  color: string;
  language: Languages;
};

function CvSkills({ skills, color, language }: CvSkillsProps): PdfViewElement {
  const combinedSkills = combineSkills(skills);
  const filteredSkillsForCv = filterSkillsForCv(combinedSkills, language);

  return (
    <View>
      <CvTitle1 color={color}>Skills</CvTitle1>
      {filteredSkillsForCv.map((skill) => (
        <CvListItem key={skill} icon="circle" isBottomSpacingEnabled={false}>
          {skill}
        </CvListItem>
      ))}
    </View>
  );
}

export default CvSkills;
