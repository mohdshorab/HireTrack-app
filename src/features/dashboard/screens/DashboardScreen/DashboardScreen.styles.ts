import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: s(Spacing.screenPadH),
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: vs(Spacing.md),
    gap: s(Spacing.sm),
  },
  sectionTitle: {
    color: Colors.textSecondary,
    fontWeight: '700',
    fontSize: ms(12),
    paddingVertical: vs(Spacing.lg),
    textTransform: 'uppercase',
    paddingBottom: vs(Spacing.sm),
  },
  applicationsContainer: {
    gap: vs(Spacing.cardGap),
  },
  fab: {
    position: 'absolute',
    bottom: vs(Spacing.xl),
    right: s(Spacing.xl),
    backgroundColor: Colors.primary,
    width: s(60),
    height: s(60),
    borderRadius: s(30),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: vs(4) },
    shadowOpacity: 0.3,
    shadowRadius: s(8),
    elevation: 5,
    zIndex: 10,
  },
  emptyText: {
    color: Colors.textSecondary,
    fontStyle: 'italic',
    paddingVertical: vs(Spacing.md),
    fontSize: ms(14),
  }
});
