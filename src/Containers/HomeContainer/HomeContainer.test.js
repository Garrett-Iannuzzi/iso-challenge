import React from 'react';
import { HomeContainer, mapDispatchToProps, mapStateToProps } from './HomeContainer';
import { shallow } from 'enzyme';
import { teamInfo, getTeamsInfo, isLoggedIn } from '../../actions/actions';

describe('HomeContainer', () => {

  let wrapper, mockEvent

  describe('homeContainer Component', () => {

    beforeEach(() => {
    wrapper = shallow(<HomeContainer
      teamInfo={jest.fn()}
      isLoggedIn={jest.fn()}
    />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should setState when handleChange is called', () => {
      wrapper.setState({ teamOneName: '', teamTwoName: '', skillLevelOne: '', skillLevelTwo: '' });
      mockEvent = { target: {name: 'teamOneName', value:'Bazanga'} }
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state()).toEqual({ teamOneName: 'Bazanga', teamTwoName: '', skillLevelOne: '', skillLevelTwo: '' });
    });

    it('Should call handleChange when teamOneName input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockEvent = { target: {teamOneName: 'teamOneName', value:'Bazzzuca'} }

      wrapper.find('.input-team-one').simulate('change', mockEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
    });

    it('Should call handleChange when teamTwoName input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockEvent = { target: {teamOneName: 'teamTwoName', value:'Bazzzuca'} }

      wrapper.find('.input-team-two').simulate('change', mockEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)
    });

    it('Should call handleChange when player one selects skill level', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockEvent = { target: { skillLevelOne: 'skillLevelOne', value:'NBA' } }

      wrapper.find('.select-skill-one').simulate('change', mockEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
    });

    it('Should call handleChange when player two selects skill level', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockEvent = { target: { skillLevelTwo: 'skillLevelTwo', value:'NBA' } }

      wrapper.find('.select-skill-two').simulate('change', mockEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
    });

    it('Should call handleStartError when the button is clicked', () => {
      wrapper.instance().handleStartError = jest.fn();

      wrapper.find('.btn-start').simulate('click');

      expect(wrapper.instance().handleStartError).toHaveBeenCalled();
    });

    it('Should call submitTeams when the button is clicked', () => {
      wrapper.instance().submitTeams = jest.fn();

      wrapper.find('.btn-start').simulate('click');
      wrapper.instance().submitTeams()

      expect(wrapper.instance().submitTeams).toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {

    it('Should return a login value of true', () => {
      const mockState = {
        isLoggedIn: true,
      };
      const expected = { login: true };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  });

  describe('mapDispatchToProps', () => {

    it('Should call mapDispatchToProps with correct team info when handleStartError is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getTeamsInfo({ teamInfo: [{ teamOneName: 'G-Swish', skillLevelOne: 'NBA' }, { teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }] });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.teamInfo({ teamInfo: [{ teamOneName: 'G-Swish', skillLevelOne: 'NBA' }, { teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }] });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('Should call mapDispatchToProps with correct loggedIn info when handleStartError is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoggedIn({ isLoggedIn: false });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.isLoggedIn({ isLoggedIn: false });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

})