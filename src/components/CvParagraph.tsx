import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { isString } from '../utils/typeChecks';

type CvParagraphProps = {
  children:
    | string
    | ReactElement<typeof View>
    | ReactElement<typeof Text>
    | (ReactElement<typeof View> | ReactElement<typeof Text>)[];
  isJustified?: boolean;
};

function CvParagraph({
  children,
  isJustified = false,
}: CvParagraphProps): JSX.Element {
  return (
    <View
      style={{
        paddingBottom: '10',
        ...(isJustified && { textAlign: 'justify' }),
      }}
    >
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}

export default CvParagraph;
