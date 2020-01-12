import React from 'react';
import GameContainer from './GameContainer';
import { shallow } from 'enzyme';

describe('GameContainer', () => {

  let wrapper

  describe('gameContainer Component', () => {

    beforeEach(() => {
      wrapper = shallow(<GameContainer />)
    });

    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

})