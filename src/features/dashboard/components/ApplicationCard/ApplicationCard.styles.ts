import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    borderRadius: ms(Radius.card),
    backgroundColor: Colors.surface,
    paddingHorizontal: s(16),
    paddingVertical: vs(12),
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: vs(Spacing.md),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTextContainer: {
    flex: 1,
    paddingRight: s(Spacing.md),
  },
  companyName: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: ms(20),
  },
  position: {
    color: Colors.textSecondary,
    fontWeight: '600',
    fontSize: ms(14),
    marginTop: vs(2),
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
  divider: {
    borderWidth: 0.5,
    borderColor: Colors.border,
    width: '100%',
    alignSelf: 'center',
    marginVertical: vs(12),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appliedOn: {
    color: Colors.textSecondary,
    fontSize: ms(12),
    fontWeight: '500',
  },
  currentRound: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: ms(Radius.sm),
    color: Colors.textDisabled,
    backgroundColor: Colors.disabled,
    paddingVertical: vs(4),
    paddingHorizontal: s(Spacing.md),
    alignSelf: 'center',
    fontSize: ms(12),
    fontWeight: '500',
    overflow: 'hidden',
  },
});
