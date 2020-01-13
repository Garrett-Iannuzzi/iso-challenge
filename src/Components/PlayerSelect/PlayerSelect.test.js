import React from 'react';
import { PlayerSelect } from './PlayerSelect';
import { shallow } from 'enzyme';

describe('PlayerSelect', () => {

  let wrapper

  describe('PlayerSelect Component', () => {

    beforeEach(() => {
      wrapper = shallow(<PlayerSelect />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

})