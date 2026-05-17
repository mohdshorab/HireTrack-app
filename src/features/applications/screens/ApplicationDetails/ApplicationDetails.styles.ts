import { StyleSheet } from 'react-native';
import { Colors, Radius, Spacing } from '../../../../themes';
import { s, ms, vs } from 'react-native-size-matters';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: s(Spacing.screenPadH),
  },
  role: {
    color: Colors.textSecondary,
    fontSize: ms(16),
  },
  rowSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  emptyText: {
    color: Colors.textSecondary,
    fontStyle: 'italic',
    paddingVertical: vs(Spacing.md),
    fontSize: ms(14),
  },
  statusBadge: {
    borderWidth: 1,
    borderRadius: ms(Radius.sm),
    paddingVertical: vs(4),
    paddingHorizontal: s(Spacing.md),
    alignSelf: 'center',
    fontSize: ms(14),
    fontWeight: '700',
    overflow: 'hidden',
    textTransform: 'capitalize',
  },
});

export default styles;
