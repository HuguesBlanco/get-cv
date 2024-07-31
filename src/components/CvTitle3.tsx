import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { isString } from '../utils/typeChecks';

type CvTitle3Props = {
  children: string | ReactElement<typeof Text>;
  extraContent?: string | ReactElement<typeof View> | ReactElement<typeof Text>;
};

function CvTitle3({
  children,
  extraContent,
}: CvTitle3Props): ReactElement<typeof View> {
  return (
    <View
      style={{
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text>{children}</Text>

      {extraContent !== undefined && isString(extraContent) && (
        <Text>{extraContent}</Text>
      )}
      {extraContent !== undefined && !isString(extraContent) && (
        <View>{extraContent}</View>
      )}
    </View>
  );
}

export default CvTitle3;
