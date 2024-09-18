import { Text } from '@react-pdf/renderer';
import { CoverLetter } from '../../services/coverletterServiceTypes';
import { Languages } from '../../types';
import CvHeader from '../primitives/CvHeader';
import CvPage from '../primitives/CvPage';
import CvPart from '../primitives/CvPart';
import CvSlot from '../primitives/CvSlot';
import { PdfPageElement } from '../types';

type CvCoverLetterProps = {
  coverLetter: CoverLetter;
  language: Languages;
  color: string;
};
function CvCoverLetter({
  coverLetter,
  language,
  color,
}: CvCoverLetterProps): PdfPageElement {
  const candidateLabel =
    language === Languages.ENGLISH ? 'Candidate' : 'Candidat';
  const jobTitle = coverLetter.positionAppliedFor;
  const headline = coverLetter.headline;

  return (
    <CvPage>
      <CvPart>
        <CvSlot>
          <CvHeader
            preTitle={candidateLabel}
            title={jobTitle}
            tagline={headline}
            color={color}
          />
        </CvSlot>
      </CvPart>

      <CvPart layoutDirection="horizontal" isExpanded>
        <CvSlot
          widthPercentage={33.333}
          isBorderRightVisible
          borderColor={color}
        >
          <Text>From to</Text>
        </CvSlot>

        <CvSlot widthPercentage={33.333}>
          <Text>Text</Text>
        </CvSlot>
      </CvPart>
    </CvPage>
  );
}

export default CvCoverLetter;
