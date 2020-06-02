import React from 'react';
// import { action } from '@storybook/addon-actions';
// import styled from '@emotion/styled/';

import Button from '../Button'

export default {
  title: 'Button',
  component: Button,
};

const btnData = { name: 'Btn Name Here' }

const btnDatas = { name: 'XXX' }

export const Start = () => <Button btnInfo={{ ...btnData }}/>

export const GetStats = () => <Button btnInfo={{ ...btnDatas }}/>