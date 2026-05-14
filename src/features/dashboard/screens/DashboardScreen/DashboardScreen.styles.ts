import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../../themes';
import { hs, vs, ms } from '../../../../utils/responsive';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: hs(Spacing.screenPadH),
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: vs(Spacing.md),
    gap: hs(Spacing.sm),
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
    right: hs(Spacing.xl),
    backgroundColor: Colors.primary,
    width: hs(60),
    height: hs(60),
    borderRadius: hs(30),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: vs(4) },
    shadowOpacity: 0.3,
    shadowRadius: hs(8),
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
