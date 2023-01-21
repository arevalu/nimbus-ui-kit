import styled from 'styled-components/native';

import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';
import { InformativeLabelProps, InformativeLabelVariant } from './types';

interface InformativeLabelMap {
  background: string;
  text: string;
}

const InformativeLabelMapper: Record<
  InformativeLabelVariant,
  InformativeLabelMap
> = {
  [InformativeLabelVariant.DEFAULT]: {
    background: Colors.neutral80,
    text: Colors.neutral00,
  },
  [InformativeLabelVariant.ERROR]: {
    background: Colors.accentRed100,
    text: Colors.neutral00,
  },
  [InformativeLabelVariant.SUCCESS]: {
    background: Colors.accentGreen100,
    text: Colors.neutral120,
  },
  [InformativeLabelVariant.WARNING]: {
    background: Colors.accentYellow100,
    text: Colors.neutral120,
  },
};

export const InformativeLabel = styled.Text<InformativeLabelProps>`
  background-color: ${({ variant }) =>
    variant ? InformativeLabelMapper[variant].background : Colors.neutral80};
  border-radius: 4px;
  font-family: ${Fonts.semiBold.name};
  font-size: 10px;
  color: ${({ variant }) =>
    variant ? InformativeLabelMapper[variant].text : Colors.neutral00};
  line-height: 12px;
  padding: 6px 8px;
  text-transform: uppercase;
`;
