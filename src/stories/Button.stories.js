import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import styled from '@emotion/styled/';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('x clicked')}>
    <span role="img" aria-label="so cool">
      NBA
    </span>
  </Button>
);

export const StartGame = () => (
  <Button onClick={action('hi clicked')}>
    hi
  </Button>
)