import { Text, View } from '@react-pdf/renderer';
import { ReactElement } from 'react';
import { isString } from '../utils/typeChecks';

type CvTitle2Props = {
  children: string | ReactElement<typeof Text>;
  extraContent?: string | ReactElement<typeof View> | ReactElement<typeof Text>;
};

function CvTitle2({
  children,
  extraContent,
}: CvTitle2Props): ReactElement<typeof View> {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
      }}
    >
      <Text style={{ fontSize: 11, textTransform: 'uppercase' }}>
        {children}
      </Text>

      {extraContent !== undefined && isString(extraContent) && (
        <Text style={{ fontSize: 9 }}>{extraContent}</Text>
      )}
      {extraContent !== undefined && !isString(extraContent) && (
        <View>{extraContent}</View>
      )}
    </View>
  );
}

export default CvTitle2;
