import { StyleSheet } from 'react-native';
import { Colors, Radius } from '../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: ms(Radius.sm),
    paddingVertical: vs(12),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
});
