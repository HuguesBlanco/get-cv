import { Text } from '@react-pdf/renderer';
import { ReactElement } from 'react';

type CvDateProps = {
  startDate: Date;
  endDate?: Date;
};

function formatDate(date: Date): string {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  return `${month}/${year}`;
}

function CvDate({
  startDate,
  endDate,
}: CvDateProps): ReactElement<typeof Text> {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate !== undefined ? formatDate(endDate) : null;

  return (
    <Text>
      {formattedStartDate}
      {formattedEndDate !== null ? ` - ${formattedEndDate}` : ''}
    </Text>
  );
}

export default CvDate;
