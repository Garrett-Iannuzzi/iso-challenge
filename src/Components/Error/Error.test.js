import React from 'react';
import { Error, mapDispatchToProps } from './Error';
import { shallow } from 'enzyme';
import { isLoggedIn } from '../../actions/actions';

describe('Error', () => {

  let wrapper

  describe('Error Component', () => {

    beforeEach(() => {
      wrapper = shallow(<Error />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapDispatchToProps', () => {

    it('Should call mapDispatchToProps with correct team info when goHome is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoggedIn(null);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.isLoggedIn(null);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});

