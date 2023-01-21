import { Fonts } from '../../fonts';
import styled from 'styled-components';
import { Colors } from '../colors';
import type { ColorBGProps } from './types';

export const ColorGroup = styled.div`
  margin: 16px 15%;

  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.neutral60};
  }
`;

export const PaletteHeading = styled.p`
  color: 1px solid ${Colors.neutral100};
  font-family: ${Fonts.black.name};
  font-size: 24px;
  margin: 0px;
`;

export const PaletteSubheading = styled.span`
  color: ${Colors.neutral60};
  font-family: ${Fonts.regular.name};
  font-size: 20px;
  margin: 0px;
`;

export const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 16px 0;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const ColorBG = styled.div<ColorBGProps>`
  background-color: ${({ color }) => Colors[color]};
  border-radius: 16px;
  height: 80px;
`;

export const ColorTitle = styled.p`
  font-family: ${Fonts.bold.name};
  font-size: 16px;
  margin-bottom: 0px;
`;

export const ColorCode = styled.p`
  color: ${Colors.neutral60};
  font-family: ${Fonts.regular.name};
  font-size: 12px;
  margin-top: 4px;
`;

export const ColorPalette = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
