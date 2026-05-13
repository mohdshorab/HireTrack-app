import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../themes';
import { hs, vs, ms } from '../../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  badge: {
    aspectRatio: 1.77,
    paddingHorizontal: hs(Spacing.md),
    justifyContent: 'center',
    borderRadius: ms(Radius.xs),
    margin: hs(Spacing.xs),
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.surface,
  },
  text: {
    color: Colors.textSecondary,
    fontWeight: '700',
    fontSize: ms(12),
    textTransform: 'uppercase',
    marginTop: vs(3),
  },
  count: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: ms(28),
  },
});
