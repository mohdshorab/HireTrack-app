import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../../../themes';
import { hs, vs, ms } from '../../../../utils/responsive';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: hs(Spacing.screenPadH),
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: vs(Spacing.md),
    paddingBottom: vs(Spacing.xxl * 2),
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  buttonContainer: {
    gap: vs(Spacing.md),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    borderRadius: ms(Radius.sm),
    paddingVertical: vs(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: Colors.textPrimary,
    fontSize: ms(16),
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: hs(Spacing.xl),
  },
  modalContent: {
    backgroundColor: Colors.surface,
    borderRadius: ms(Radius.sm),
    borderWidth: 1,
    borderColor: Colors.border,
  },
  modalOption: {
    paddingVertical: vs(Spacing.md),
    paddingHorizontal: hs(Spacing.lg),
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
  },
  modalOptionText: {
    color: Colors.textPrimary,
    fontSize: ms(16),
    fontWeight: '500',
  },
});
