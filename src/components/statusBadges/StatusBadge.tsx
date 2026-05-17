import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Radius, Spacing } from '../../themes';
import { s, ms, vs } from 'react-native-size-matters';

type StatusBadgeProps = {
  status?: string;
  onPress?: () => void;
};

const getStatusStyle = (status?: string) => {
  const normalized = status?.toLowerCase();
  const key = (normalized === 'active' ? 'interview' : normalized) as keyof typeof Colors.badge;
  const theme = Colors.badge[key];

  return theme
    ? { color: theme.text, backgroundColor: theme.bg, borderColor: theme.border }
    : { color: Colors.textSecondary, backgroundColor: Colors.border, borderColor: Colors.border };
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, onPress }) => {
  if (!status) return null;
  return (
    <>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.statusBadge, getStatusStyle(status)]}>{status}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={[styles.statusBadge, getStatusStyle(status)]}>{status}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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

export default StatusBadge;
