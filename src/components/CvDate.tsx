import { Text } from '@react-pdf/renderer';
import { PdfTextElement } from './types';

type CvDateProps = {
  startDate: Date;
  endDate?: Date;
  isMonthDisplayed: boolean;
};

function formatDate(date: Date, isMonthDisplayed: boolean): string {
  const year = date.getFullYear().toString();
  if (isMonthDisplayed) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${month}/${year}`;
  }
  return year;
}

function CvDate({
  startDate,
  endDate,
  isMonthDisplayed,
}: CvDateProps): PdfTextElement {
  const formattedStartDate = formatDate(startDate, isMonthDisplayed);
  const formattedEndDate =
    endDate !== undefined ? formatDate(endDate, isMonthDisplayed) : null;

  return (
    <Text>
      {formattedStartDate}
      {formattedEndDate !== null ? ` - ${formattedEndDate}` : ''}
    </Text>
  );
}

export default CvDate;
