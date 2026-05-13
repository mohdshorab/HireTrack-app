export const Colors = {
  primary: '#6C63FF',
  primaryLight: '#7C74FF',
  primaryDark: '#5C55CC',
  secondary: '#FF6584',

  success: '#43D98F',
  danger: '#FF5B5B',
  warning: '#FFB547',

  background: '#0F0F14',
  surface: '#1C1C26',
  border: '#2C2C3E',
  disabled: '#2A2A35',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#8F8F9E',
  textDisabled: '#6E6E82',

  // Status Badge
  badge: {
    applied: {
      bg: 'transparent',
      text: '#38BDF8',
      border: '#38BDF8',
    },
    interview: {
      bg: 'transparent',
      text: '#4ADE80',
      border: '#4ADE80',
    },
    rejected: {
      bg: 'transparent',
      text: '#F87171',
      border: '#F87171',
    },
    offer: {
      bg: 'transparent',
      text: '#FBBF24',
      border: '#FBBF24',
    },
    shortlisted: {
      bg: 'transparent',
      text: '#C084FC',
      border: '#C084FC',
    },
  },
} as const;
