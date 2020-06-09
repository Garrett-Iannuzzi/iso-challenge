import React from 'react';

import CardContainer from '../CardContainer';

export default {
  title: 'CardContainer',
  component: CardContainer
};

const cardContainerData = {
  className: 'some-class-name'
}

export const CardContainer = () => <CardContainer info={{ ...cardContainerData }} />