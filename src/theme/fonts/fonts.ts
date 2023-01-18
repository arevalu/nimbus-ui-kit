enum FontVariant {
  BLACK = 'black',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  MEDIUM = 'medium',
  REGULAR = 'regular',
  SEMI_BOLD = 'semiBold',
}

interface FontProps {
  name: string;
  value: number;
}

export const Fonts: Record<FontVariant, FontProps> = {
  [FontVariant.BLACK]: {
    name: 'Nunito-Black',
    value: 900,
  },
  [FontVariant.BOLD]: {
    name: 'Nunito-Bold',
    value: 700,
  },
  [FontVariant.EXTRA_BOLD]: {
    name: 'Nunito-ExtraBold',
    value: 800,
  },
  [FontVariant.EXTRA_LIGHT]: {
    name: 'Nunito-ExtraLight',
    value: 200,
  },
  [FontVariant.LIGHT]: {
    name: 'Nunito-Light',
    value: 300,
  },
  [FontVariant.MEDIUM]: {
    name: 'Nunito-Medium',
    value: 500,
  },
  [FontVariant.REGULAR]: {
    name: 'Nunito-Regular',
    value: 400,
  },
  [FontVariant.SEMI_BOLD]: {
    name: 'Nunito-SemiBold',
    value: 600,
  },
};

export type FontsType = typeof Fonts;
