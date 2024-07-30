import { Text } from '@react-pdf/renderer';

type ErrorMessageProps = {
  message: string;
};

function CvError({ message }: ErrorMessageProps): JSX.Element {
  console.error(message);

  return (
    <Text style={{ color: '#ff0000', fontWeight: 'bold' }}>{message}</Text>
  );
}

export default CvError;
