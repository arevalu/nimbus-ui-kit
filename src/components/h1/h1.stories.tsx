import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { H1 } from './h1';

export default {
  title: 'Typography/H1',
  component: H1,
} as ComponentMeta<typeof H1>;

export const Template: ComponentStory<typeof H1> = (args) => (
  <H1 {...args}>Some text </H1>
);

Template.storyName = 'H1';


