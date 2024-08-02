import { Text } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { PdfTextElement } from './types';

export type CvErrorProps = {
  message: string;
};

/**
 * Represents a `<CvError>` element.
 *
 * This type is used to explicitly define the return type of an element that might return a `<CvError>` component.
 *
 * Note: TypeScript generally treats all component return types as `JSX.Element`, so this type is for adding clarity and making the error return explicit, not for type check.
 */
export type CvErrorElement = ReactElement<CvErrorProps, typeof CvError>;

function CvError({ message }: CvErrorProps): PdfTextElement {
  console.error(message);

  return (
    <Text style={{ color: '#ff0000', fontWeight: 'bold' }}>{message}</Text>
  );
}

export default CvError;
