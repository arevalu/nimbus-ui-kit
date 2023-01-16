import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'rgba(0,2,89,1)',
  colorSecondary: 'rgba(92,214,171,1)',

  // UI
  appBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Nunito, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'rgba(255,255,255,1)',
  barBg: 'rgba(0,2,89,1)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Nimbus UI',
  brandTarget: '_self',
});