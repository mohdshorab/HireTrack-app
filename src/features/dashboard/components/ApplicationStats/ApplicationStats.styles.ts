import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  badge: {
    aspectRatio: 1.77,
    paddingHorizontal: s(Spacing.md),
    justifyContent: 'center',
    borderRadius: ms(Radius.xs),
    margin: s(Spacing.xs),
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
