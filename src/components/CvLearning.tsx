import { View } from '@react-pdf/renderer';
import CvDate from './CvDate';
import CvParagraph from './CvParagraph';
import CvTitle3 from './CvTitle3';
import { PdfTextElement, PdfViewElement } from './types';

type DateRangeProps = { start: Date | null; end: Date | null };

function LearningPeriod({ start, end }: DateRangeProps): PdfTextElement | null {
  if (start === null || end === null) return null;

  return <CvDate startDate={start} endDate={end} isMonthDisplayed={false} />;
}

type CvLearningProps = {
  title: string;
  learningProvider: string;
  dateRange?: { start: Date; end: Date };
};

function CvLearning({
  title,
  learningProvider,
  dateRange,
}: CvLearningProps): PdfViewElement {
  return (
    <View>
      <CvTitle3
        extraContent={
          <LearningPeriod
            start={dateRange?.start ?? null}
            end={dateRange?.end ?? null}
          />
        }
      >
        {title}
      </CvTitle3>
      <CvParagraph>{learningProvider}</CvParagraph>
    </View>
  );
}

export default CvLearning;
