import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { isString } from '../utils/typeChecks';

type CvTitleProps = {
  children:
    | string
    | ReactElement<typeof View>
    | ReactElement<typeof Text>
    | (ReactElement<typeof View> | ReactElement<typeof Text>)[];
};

function CvTitle({ children }: CvTitleProps): JSX.Element {
  return (
    <View style={{ paddingBottom: '10', color: '#a3c3e4', fontSize: '20' }}>
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}

export default CvTitle;
