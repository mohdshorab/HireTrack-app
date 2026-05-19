import { StyleSheet } from 'react-native';
import { Colors, Radius, Spacing } from '../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: ms(Radius.sm),
    paddingVertical: vs(12),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  buttonDisabled: {
    backgroundColor: Colors.textDisabled,
    opacity: 0.6,
  },
  text: {
    color: Colors.textPrimary,
    fontSize: ms(16),
    fontWeight: '700',
  },
  textDisabled: {
    color: Colors.textSecondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: Colors.primary,
  },
  outlineDisabled: {
    backgroundColor: 'transparent',
    borderColor: Colors.textDisabled,
    opacity: 0.5,
  },
  textOutline: {
    color: Colors.primary,
  },
});
