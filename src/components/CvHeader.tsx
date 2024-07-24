import { Text, View } from '@react-pdf/renderer';
import { CvData } from '../services/cvServiceTypes';

export default function CvHeader({ cvData }: { cvData: CvData }): JSX.Element {
  return (
    <View>
      <View>
        <Text>{cvData.name.firstName}</Text>
      </View>
      <View>
        <Text>{cvData.name.lastName}</Text>
      </View>
      <View>
        <Text>{cvData.objective}</Text>
      </View>
    </View>
  );
}
