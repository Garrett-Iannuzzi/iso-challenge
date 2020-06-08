import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../Button'

export default {
  title: 'Button',
  component: Button,
};

const btnData = { 
  name: 'Start The Game',
  fn: action('clicked me'),
  className: 'some-class-name'
}

const btnDatas = { 
  name: 'XXX',
  fn: action('clicked meeee'),
  className: 'some-class-name'
}

export const Start = () => <Button btnInfo={{ ...btnData }} onClick={btnData.fn} className={btnData.className} />

export const GetStats = () => <Button btnInfo={{ ...btnDatas }} onClick={btnDatas.fn} className={btnDatas.className}/>