import React from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { Colors } from '../../themes';
import { styles } from './FormInput.styles';

interface FormInputProps extends TextInputProps {
  label: string;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, rightIcon, onPress, errorMessage, ...props }) => {
  const containerStyle = [
    styles.container,
    errorMessage ? styles.containerError : null,
  ];

  const innerContent = (
    <>
      <Text style={[styles.label, errorMessage ? styles.labelError : null]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.textDisabled}
          editable={!onPress}
          pointerEvents={onPress ? 'none' : 'auto'}
          {...props}
        />
        {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
      </View>
    </>
  );

  return (
    <View style={styles.wrapper}>
      {onPress ? (
        <TouchableOpacity style={containerStyle} onPress={onPress} activeOpacity={0.7}>
          {innerContent}
        </TouchableOpacity>
      ) : (
        <View style={containerStyle}>{innerContent}</View>
      )}
      {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default FormInput;
