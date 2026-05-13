import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Colors } from '../../themes';
import { hs } from '../../utils/responsive';

type IconProps = {
  iconName: string;
  color?: string;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const IonicIcon: React.FC<IconProps> = ({
  iconName,
  color = Colors.textPrimary,
  size = 20,
  onPress,
  style,
}) => {
  return (
    <>
      {onPress ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style}>
          <Ionicons name={iconName} color={color} size={hs(size)} />
        </TouchableOpacity>
      ) : (
        <View style={style}>
          <Ionicons name={iconName} color={color} size={hs(size)} />
        </View>
      )}
    </>
  );
};

export default IonicIcon;
