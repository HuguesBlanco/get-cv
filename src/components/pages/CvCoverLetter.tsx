import { Text } from '@react-pdf/renderer';
import { CoverLetter } from '../../services/coverletterServiceTypes';
import { Cv } from '../../services/cvServiceTypes';
import { Languages } from '../../types';
import CvHeader from '../primitives/CvHeader';
import CvPage from '../primitives/CvPage';
import CvPart from '../primitives/CvPart';
import CvSlot from '../primitives/CvSlot';
import CvText from '../primitives/CvText';
import { PdfPageElement } from '../types';

type CvCoverLetterProps = {
  cv: Cv;
  coverLetter: CoverLetter;
  language: Languages;
  color: string;
};
function CvCoverLetter({
  cv,
  coverLetter,
  language,
  color,
}: CvCoverLetterProps): PdfPageElement {
  const candidateLabel =
    language === Languages.ENGLISH ? 'Candidate' : 'Candidat';

  return (
    <CvPage>
      <CvPart>
        <CvSlot>
          <CvHeader
            preTitle={candidateLabel}
            title={cv.targetPosition}
            tagline={coverLetter.headline}
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

        <CvSlot widthPercentage={66.666}>
          <CvText structuredText={coverLetter.body} />
        </CvSlot>
      </CvPart>
    </CvPage>
  );
}

export default CvCoverLetter;
