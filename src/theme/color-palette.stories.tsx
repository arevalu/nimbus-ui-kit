import React from 'react';
import { storiesOf } from '@storybook/react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import { Colors } from './colors';

storiesOf('Colors/Palette', module)
  .addParameters({
    previewTabs: {
      canvas: { hidden: true },
    },
  })
  .add('Palette', () => (
    <ColorPalette>
      <ColorItem
        title="Primary | light"
        subtitle="#000259"
        colors={{
          '20': Colors.primary20,
          '40': Colors.primary40,
          '60': Colors.primary60,
          '80': Colors.primary80,
          '100': Colors.primary100,
        }}
      />
      <ColorItem
        title="Primary | dark"
        subtitle="#17183B"
        colors={{
          '20': Colors.primaryDark20,
          '40': Colors.primaryDark40,
          '60': Colors.primaryDark60,
          '80': Colors.primaryDark80,
          '100': Colors.primaryDark100,
        }}
      />
      <ColorItem
        title="Secondary"
        subtitle="#0057FF"
        colors={{
          '20': Colors.secondary20,
          '40': Colors.secondary40,
          '60': Colors.secondary60,
          '80': Colors.secondary80,
          '100': Colors.secondary100,
        }}
      />
      <ColorItem
        title="Accent | yellow"
        subtitle="#FFBA08"
        colors={{
          '20': Colors.accentYellow20,
          '40': Colors.accentYellow40,
          '60': Colors.accentYellow60,
          '80': Colors.accentYellow80,
          '100': Colors.accentYellow100,
        }}
      />
      <ColorItem
        title="Accent | red"
        subtitle="#FF2B2B"
        colors={{
          '20': Colors.accentRed20,
          '40': Colors.accentRed40,
          '60': Colors.accentRed60,
          '80': Colors.accentRed80,
          '100': Colors.accentRed100,
        }}
      />
      <ColorItem
        title="Accent | green"
        subtitle="#00CB82"
        colors={{
          '20': Colors.accentGreen20,
          '40': Colors.accentGreen40,
          '60': Colors.accentGreen60,
          '80': Colors.accentGreen80,
          '100': Colors.accentGreen100,
        }}
      />
      <ColorItem
        title="Neutral"
        subtitle=""
        colors={{
          '00': Colors.neutral00,
          '20': Colors.neutral20,
          '40': Colors.neutral40,
          '60': Colors.neutral60,
          '80': Colors.neutral80,
          '100': Colors.neutral100,
          '120': Colors.neutral120,
        }}
      />
    </ColorPalette>
  ));
