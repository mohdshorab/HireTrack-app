import { StyleSheet } from 'react-native';
import { Colors, Radius, Spacing } from '../../../../themes';
import { ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  content: {
    backgroundColor: Colors.disabled,
    borderRadius: ms(Radius.sm),
    padding: ms(Spacing.md),
    width: '90%',
  },
  text: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: ms(14),
    textAlign: 'center',
  },
});
