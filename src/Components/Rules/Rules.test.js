import React from 'react';
import Rules from './Rules';
import { shallow } from 'enzyme';

describe('Rules', () => {

  let wrapper

  describe('Rules Component', () => {

    beforeEach(() => {
      wrapper = shallow(<Rules />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

})