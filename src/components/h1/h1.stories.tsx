import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { H1 } from './h1';

type H1Type = typeof H1;

export default {
  title: 'Typography/H1',
  component: H1,
} as ComponentMeta<H1Type>;

export const Template: ComponentStory<H1Type> = args => (
  <H1 {...args}>Some text </H1>
);

Template.storyName = 'H1';
