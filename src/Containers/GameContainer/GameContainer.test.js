import React from 'react';
import { GameContainer, mapStateToProps, mapDispatchToProps } from './GameContainer';
import { teamInfo , playerInfo} from ''
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

  describe('mapStateToProps', () => {

    it('Should return a teams info', () => {
      const mockState = {
        teamInfo: [{ teamOneName: 'G-Swish', skillLevelOne: 'NBA' }, { teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }] 
      };
      const expected = { teamInfo: [{ teamOneName: 'G-Swish', skillLevelOne: 'NBA' }, { teamTwoName: 'D-Buckets', skillLevelTwo: 'NBA' }] };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });

    it('Should return player info', () => {
      const mockState = {
        playerInfo: [
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
      };
      const expected = mockState;

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  });
})