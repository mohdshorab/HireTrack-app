import { Text, View } from 'react-native';
import { Colors } from '../../../themes';
import { s, ms, vs } from 'react-native-size-matters';

type PiepelineProps = {
  status?: string;
};
const Pipeline: React.FC<PiepelineProps> = ({ status }) => {
  return (
    <View style={{flexDirection: 'row',marginVertical: vs(18), columnGap: s(16)}}>
      {[...Array(5)].map((_, key) => (
        <Text key={key} style={{ color: Colors.textPrimary, fontSize: ms(16) }}>status</Text>
      ))}
    </View>
  );
};
export default Pipeline;
