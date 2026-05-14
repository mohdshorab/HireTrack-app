import { StyleSheet } from 'react-native';
import { Colors } from '../../themes';
import { hs, ms, vs } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: hs(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: vs(6),
    paddingBottom: vs(12),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: ms(14),
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  content: {
    marginTop: vs(15),
  },
});
