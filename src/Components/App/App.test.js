import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { getPlayerInfo } from '../../actions/actions';

describe('App', () => {

  let wrapper

  describe('App Component', () => {

    beforeEach(() => {
      wrapper = shallow(<App />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapDispatchToProps', () => {

    it('Should call mapDispatchToProps with correct information info when playerInfo is called', () => {
      const mockDispatch = jest.fn();
      const mockPlayerData = [
        {        
          id:14,
          first_name:"Ike",
          height_feet:null,
          height_inches:null,
          last_name:"Anigbogu",
          position:"C",
          team: {
            id:12,
            abbreviation:"IND",
            city:"Indiana",
            conference:"East",
            division:"Central",
            full_name:"Indiana Pacers",
            name:"Pacers"
          },
          weight_pounds:null
        },
        {
          id:25,
          first_name:"Ron",
          height_feet:null,
          height_inches:null,
          last_name:"Baker",
          position:"G",
          team: {
            id:20,
            abbreviation:"NYK",
            city:"New York",
            conference:"East",
            division:"Atlantic",
            full_name:"New York Knicks",
            name:"Knicks"
          },
          weight_pounds:null
        }
      ]
      const actionToDispatch = getPlayerInfo(mockPlayerData);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.playerInfo(mockPlayerData);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  });

})