export const Spacing = {
  xs:  4,
  sm:  8,
  md:  12,
  lg:  16,
  xl:  20,
  xxl: 24,

  screenPadH: 16,   // Horizontal screen padding
  cardPad:    16,   // Card internal padding
  cardGap:    12,   // Gap between cards
  sectionGap: 20,   // Between page sections
  inputPadH:  14,   // Input horizontal padding
  inputPadV:  10,   // Input vertical padding
} as const;

export const Radius = {
  xs:   4,
  sm:   6,
  md:   8,
  lg:   10,
  xl:   12,
  card: 14,
  btn:  12,
  input: 11,
  avatar: 10,
  pill: 999,
} as const;

export const Shadows = {
  card: {
    shadowColor:   '#000',
    shadowOffset:  { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius:  16,
    elevation:     8,
  },
  fab: {
    shadowColor:   '#6C63FF',
    shadowOffset:  { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius:  12,
    elevation:     10,
  },
  btn: {
    shadowColor:   '#6C63FF',
    shadowOffset:  { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius:  8,
    elevation:     6,
  },
} as const;