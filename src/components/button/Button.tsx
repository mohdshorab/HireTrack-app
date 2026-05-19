import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { styles } from './Button.styles';
import { Colors } from '../../themes';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  loading = false,
  outline = false,
}) => {
  const isInteractionDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        outline && styles.outline,
        isInteractionDisabled && styles.buttonDisabled,
        isInteractionDisabled && outline && styles.outlineDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={isInteractionDisabled}>
      {loading ? (
        <ActivityIndicator size="small" color={outline ? Colors.primary : Colors.textPrimary} />
      ) : (
        <Text
          style={[
            styles.text,
            outline && styles.textOutline,
            disabled && styles.textDisabled,
            textStyle,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
