import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Colors } from '../../themes';
import { s } from 'react-native-size-matters';

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
          <Ionicons name={iconName as any} color={color} size={s(size)} />
        </TouchableOpacity>
      ) : (
        <View style={style}>
          <Ionicons name={iconName as any} color={color} size={s(size)} />
        </View>
      )}
    </>
  );
};

export default IonicIcon;
