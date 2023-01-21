import type { ColorsKey } from '../colors';

export interface ColorProps {
  code?: string;
  color: ColorsKey;
  name?: string;
}

export type ColorBGProps = Pick<ColorProps, 'color'>;
