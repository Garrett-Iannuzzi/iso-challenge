import React from 'react';
import { action } from '@storybook/addon-actions';
// import styled from '@emotion/styled/';

import Button from '../Button'

export default {
  title: 'Button',
  component: Button,
};

const btnData = { 
  name: 'Start The Game',
}

const actionsData = {
  fn: action('fn')
}


const btnDatas = { 
  name: 'XXX',
  fn: () => console.log('ClickedXXX')
}



export const Start = () => <Button btnInfo={{ ...btnData }} />

export const GetStats = () => <Button btnInfo={{ ...btnDatas }} />