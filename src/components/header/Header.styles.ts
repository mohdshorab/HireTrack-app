import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(Spacing.md),
    alignContent: 'center',
    gap: vs(Spacing.md),
  },
  backButton: {
    marginRight: s(Spacing.xl),
    flexDirection: 'row',
    gap: s(Spacing.xs),
    alignSelf: 'flex-start',
  },
  titleText: {
    fontWeight: '700',
    fontSize: ms(18),
    color: Colors.textPrimary,
  },
  leftText: {
    color: Colors.textPrimary,
    fontSize: ms(16),
  },
  date: {
    color: Colors.textSecondary,
    fontWeight: '600',
    marginTop: vs(2),
    fontSize: ms(10),
  },
});
