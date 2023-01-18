import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typeset } from '@storybook/addon-docs';
import { Fonts } from './fonts';

const FONT_SIZE = [''];

storiesOf('Typography/Fonts', module)
  .addParameters({
    previewTabs: {
      canvas: { hidden: true },
    },
  })
  .add('Fonts', () => (
    <>
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.extraLight.value}
        sampleText={Fonts.extraLight.name}
        fontFamily={Fonts.extraLight.name}
      />
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.light.value}
        sampleText={Fonts.light.name}
        fontFamily={Fonts.light.name}
      />
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.regular.value}
        sampleText={Fonts.regular.name}
        fontFamily={Fonts.regular.name}
      />
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.medium.value}
        sampleText={Fonts.medium.name}
        fontFamily={Fonts.medium.name}
      />
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.semiBold.value}
        sampleText={Fonts.semiBold.name}
        fontFamily={Fonts.semiBold.name}
      />
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.bold.value}
        sampleText={Fonts.bold.name}
        fontFamily={Fonts.bold.name}
      />
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.extraBold.value}
        sampleText={Fonts.extraBold.name}
        fontFamily={Fonts.extraBold.name}
      />
      <Typeset
        fontSizes={FONT_SIZE}
        fontWeight={Fonts.black.value}
        sampleText={Fonts.black.name}
        fontFamily={Fonts.black.name}
      />
    </>
  ));
