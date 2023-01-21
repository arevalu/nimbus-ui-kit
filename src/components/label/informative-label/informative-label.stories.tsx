import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { InformativeLabel } from '.';
import { InformativeLabelVariant } from './types';

export default {
  title: 'Components/Labels/InformativeLabel',
  component: InformativeLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      defaultValue: InformativeLabelVariant.DEFAULT,
      options: Object.values(InformativeLabelVariant),
      mapping: Object.values(InformativeLabelVariant),
      control: {
        type: 'radio',
        labels: Object.keys(InformativeLabelVariant),
      },
    },
  },
} as ComponentMeta<typeof InformativeLabel>;

export const Component: ComponentStory<typeof InformativeLabel> = ({
  children,
  ...args
}) => <InformativeLabel {...args}>{children}</InformativeLabel>;

Component.args = {
  children: 'Text',
};
Component.storyName = 'InformativeLabel';
