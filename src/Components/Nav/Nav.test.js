import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let wrapper

  describe('Nav Component', () => {

    beforeEach(() => {
      wrapper = shallow(<Nav />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

})