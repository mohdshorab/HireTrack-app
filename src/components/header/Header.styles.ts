import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../themes';
import { hs, vs, ms } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(Spacing.md),
    alignContent: 'center',
    gap: vs(Spacing.md),
  },
  backButton: {
    marginRight: hs(Spacing.xl),
    flexDirection: 'row',
    gap: hs(Spacing.xs),
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
