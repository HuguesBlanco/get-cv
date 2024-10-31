import { Languages } from '../appTypes';
import CvDocument from '../cv/CvDocument';
import { PdfDocumentElement } from '../cv/types/pdfTypes';
import { convertMarkupToParagraphs } from '../libs/richTextParsers';
import { CoverLetter } from '../services/coverletterServiceTypes';
import { Cv } from '../services/cvServiceTypes';
import { AppColors } from '../styles/colors';
import { ConfigurationFormData } from './ConfigurationForm';

type DocumentProps = {
  initialCv: Cv;
  initialCoverLetter: CoverLetter;
  form: ConfigurationFormData;
  language: Languages;
};

function Document({
  initialCv,
  initialCoverLetter,
  form,
  language,
}: DocumentProps): PdfDocumentElement {
  const TARGETED_POSITION_TAG = '{{targetedPosition}}'; // Tag used in CV and cover letter initial data texts

  // Build CV
  const objective = initialCv.objective.replace(
    TARGETED_POSITION_TAG,
    form.targetedPosition,
  );
  const companies = initialCv.companies.filter(
    // Exclude Apollo internship to prioritize a cleaner layout by omitting less significant experience.
    (company) => company.name !== 'Apollo',
  );
  const cv = {
    ...initialCv,
    targetedPosition: form.targetedPosition,
    objective,
    companies,
  };

  // Build cover letter
  const coverLetterBodyMarkup = form.coverLetterBodyMarkup.replace(
    TARGETED_POSITION_TAG,
    form.targetedPosition,
  );
  const structuredParagraphs = convertMarkupToParagraphs(coverLetterBodyMarkup);
  const coverLetter = {
    ...initialCoverLetter,
    date: form.date,
    body: structuredParagraphs,
  };

  return (
    <CvDocument
      language={language}
      cv={cv}
      coverLetter={coverLetter}
      recipient={form.recipient}
      isCvIncluded={form.isCvIncluded}
      isCoverLetterIncluded={form.isCoverLetterIncluded}
      color={AppColors.PRIMARY}
    />
  );
}

export default Document;
