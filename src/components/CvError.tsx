import { Text } from '@react-pdf/renderer';
import { PdfTextElement } from './types';

export type CvErrorProps = {
  message: string;
};

function CvError({ message }: CvErrorProps): PdfTextElement {
  console.error(message);

  return (
    <Text style={{ color: '#ff0000', fontWeight: 'bold' }}>{message}</Text>
  );
}

export default CvError;
