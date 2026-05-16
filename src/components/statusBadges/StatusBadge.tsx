import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing } from '../../themes';
import { hs, ms, vs } from '../../utils/responsive';

type StatusBadgeProps = {
  status?: string;
};

const getStatusStyle = (status?: string) => {
  const normalized = status?.toLowerCase();
  const key = (normalized === 'active' ? 'interview' : normalized) as keyof typeof Colors.badge;
  const theme = Colors.badge[key];

  return theme
    ? { color: theme.text, backgroundColor: theme.bg, borderColor: theme.border }
    : { color: Colors.textSecondary, backgroundColor: Colors.border, borderColor: Colors.border };
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (!status) return null;

  return (
    <Text style={[styles.statusBadge, getStatusStyle(status)]}>{status}</Text>
  );
};

const styles = StyleSheet.create({
  statusBadge: {
    borderWidth: 1,
    borderRadius: ms(Radius.sm),
    paddingVertical: vs(4),
    paddingHorizontal: hs(Spacing.md),
    alignSelf: 'center',
    fontSize: ms(14),
    fontWeight: '700',
    overflow: 'hidden',
    textTransform: 'capitalize',
  },
});

export default StatusBadge;
