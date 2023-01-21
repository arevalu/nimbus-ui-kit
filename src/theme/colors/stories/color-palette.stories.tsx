import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';

import { hideDocsTab } from '../../../../storybook/helpers';
import { Colors } from '../colors';
import type { ColorProps } from './types';
import {
  ColorBG,
  ColorCode,
  ColorGroup,
  ColorPalette,
  ColorTitle,
  ColorWrapper,
  PaletteHeading,
  PaletteSubheading,
} from './styles';

const Color: FC<ColorProps> = ({ code, color, name }) => (
  <ColorWrapper>
    <ColorBG color={color} />
    <ColorTitle>{name}</ColorTitle>
    <ColorCode>{code}</ColorCode>
  </ColorWrapper>
);

storiesOf('Styles/Colors', module)
  .addParameters({
    ...hideDocsTab,
  })
  .add('Colors', () => (
    <div>
      <ColorGroup>
        <PaletteHeading>
          Primary <PaletteSubheading>light</PaletteSubheading>
        </PaletteHeading>

        <ColorPalette>
          <Color code={Colors.primary100} color="primary100" name="100%" />
          <Color code={Colors.primary80} color="primary80" name="80%" />
          <Color code={Colors.primary60} color="primary60" name="60%" />
          <Color code={Colors.primary40} color="primary40" name="40%" />
          <Color code={Colors.primary20} color="primary20" name="20%" />
        </ColorPalette>
      </ColorGroup>

      <ColorGroup>
        <PaletteHeading>
          Primary <PaletteSubheading>dark</PaletteSubheading>
        </PaletteHeading>

        <ColorPalette>
          <Color
            code={Colors.primaryDark100}
            color="primaryDark100"
            name="100%"
          />
          <Color code={Colors.primaryDark80} color="primaryDark80" name="80%" />
          <Color code={Colors.primaryDark60} color="primaryDark60" name="60%" />
          <Color code={Colors.primaryDark40} color="primaryDark40" name="40%" />
          <Color code={Colors.primaryDark20} color="primaryDark20" name="20%" />
        </ColorPalette>
      </ColorGroup>

      <ColorGroup>
        <PaletteHeading>Secondary</PaletteHeading>
        <ColorPalette>
          <Color code={Colors.secondary100} color="secondary100" name="100%" />
          <Color code={Colors.secondary80} color="secondary80" name="80%" />
          <Color code={Colors.secondary60} color="secondary60" name="60%" />
          <Color code={Colors.secondary40} color="secondary40" name="40%" />
          <Color code={Colors.secondary20} color="secondary20" name="20%" />
        </ColorPalette>
      </ColorGroup>

      <ColorGroup>
        <PaletteHeading>Tertiary / Accent</PaletteHeading>
        <ColorPalette>
          <Color
            code={Colors.accentYellow100}
            color="accentYellow100"
            name="100%"
          />
          <Color
            code={Colors.accentYellow80}
            color="accentYellow80"
            name="80%"
          />
          <Color
            code={Colors.accentYellow60}
            color="accentYellow60"
            name="60%"
          />
          <Color
            code={Colors.accentYellow40}
            color="accentYellow40"
            name="40%"
          />
          <Color
            code={Colors.accentYellow20}
            color="accentYellow20"
            name="20%"
          />
        </ColorPalette>
        <ColorPalette>
          <Color
            code={Colors.accentGreen100}
            color="accentGreen100"
            name="100%"
          />
          <Color code={Colors.accentGreen80} color="accentGreen80" name="80%" />
          <Color code={Colors.accentGreen60} color="accentGreen60" name="60%" />
          <Color code={Colors.accentGreen40} color="accentGreen40" name="40%" />
          <Color code={Colors.accentGreen20} color="accentGreen20" name="20%" />
        </ColorPalette>
        <ColorPalette>
          <Color code={Colors.accentRed100} color="accentRed100" name="100%" />
          <Color code={Colors.accentRed80} color="accentRed80" name="80%" />
          <Color code={Colors.accentRed60} color="accentRed60" name="60%" />
          <Color code={Colors.accentRed40} color="accentRed40" name="40%" />
          <Color code={Colors.accentRed20} color="accentRed20" name="20%" />
        </ColorPalette>
      </ColorGroup>

      <ColorGroup>
        <PaletteHeading>Neutral</PaletteHeading>
        <ColorPalette>
          <Color code={Colors.neutral120} color="neutral120" name="120%" />
          <Color code={Colors.neutral100} color="neutral100" name="100%" />
          <Color code={Colors.neutral80} color="neutral80" name="80%" />
          <Color code={Colors.neutral60} color="neutral60" name="60%" />
          <Color code={Colors.neutral40} color="neutral40" name="40%" />
          <Color code={Colors.neutral20} color="neutral20" name="20%" />
          <Color code={Colors.neutral00} color="neutral00" name="0%" />
        </ColorPalette>
      </ColorGroup>
    </div>
  ));
