import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../Button'

export default {
  title: 'Button',
  component: Button,
};

const btnData = { 
  name: 'Start The Game',
  fn: action('clicked me')
}

const btnDatas = { 
  name: 'XXX',
  fn: action('clicked meeee')

}

export const Start = () => <Button btnInfo={{ ...btnData }} onClick={btnData.fn} />

export const GetStats = () => <Button btnInfo={{ ...btnDatas }} onClick={btnDatas.fn}/>