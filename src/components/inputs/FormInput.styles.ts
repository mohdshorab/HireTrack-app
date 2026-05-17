import { StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../../themes';
import { s, vs, ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: vs(Spacing.md),
  },
  container: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: ms(Radius.sm),
    paddingHorizontal: s(Spacing.md),
    paddingVertical: vs(10),
  },
  containerError: {
    borderColor: Colors.danger,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: ms(10),
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: vs(2),
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelError: {
    color: Colors.danger,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: ms(16),
    fontWeight: '600',
    padding: 0,
  },
  iconContainer: {
    marginLeft: s(Spacing.sm),
  },
  errorText: {
    color: Colors.danger,
    fontSize: ms(12),
    marginTop: vs(4),
    marginLeft: s(4),
  },
});
