import React, { Component } from 'react';
import './HomeContainer.scss';
import { connect } from 'react-redux';
import { getTeamsInfo } from '../../actions/actions';
import { Link } from 'react-router-dom';

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state ={
      teamOneName: '',
      teamTwoName: '',
      skillLevelOne: '',
      skillLevelTwo: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleStartError = () => {
    const {teamOneName, teamTwoName, skillLevelOne, skillLevelTwo } = this.state
    const teamOne = { teamOneName, skillLevelOne };
    const teamTwo = { teamTwoName, skillLevelTwo }
    this.props.teamInfo(teamOne, teamTwo)
    

      // const { teamOneName, teamTwoName, skillLevelOne, skillLevelTwo } = this.state;
      // if (teamOneName === '' || teamTwoName === '' || skillLevelOne === '' || skillLevelTwo === '') {

      // } else {

      // }
  }


  render() {
    return(
      <div>
        <form>
          <label for='teamOneName'>Team 1 Name</label>
          <input
            name='teamOneName'
            className='input-team-one'
            value={this.state.teamOneName}
            placeholder='Enter Team Name'
            type='text'
            maxLength='25'
            onChange={ (e) => this.handleChange(e) }
          />
          <label for='skillLevelOne'>Select Level</label>
          <select
            id='skillLevelOne'
            value={this.state.skillLevelOne}
            name='skillLevelOne'
            className='select-skill-one'
            onChange={ (e) => this.handleChange(e) }
          >
            <option value='And-1'>And-1</option>
            <option value='D League'>D League</option>
            <option value=''>NBA</option>
          </select>
        </form>
        <form>
          <label for='teamNameTwo'>Team 2 Name</label>
          <input
            name='teamTwoName'
            className='input-team-two'
            value={this.state.teamTwoName}
            placeholder='Enter Team Name'
            type='text'
            maxLength='25'
            onChange={ (e) => this.handleChange(e) }
          />
          <label for='skillLevelTwo'>Select Level</label>
          <select
            id='skillLevelTwo'
            value={this.state.skillLevelTwo}
            name='skillLevelTwo'
            className='select-skill-two'
            onChange={ (e) => this.handleChange(e) }
          >
            <option value='And-1'>And-1</option>
            <option value='D League'>D League</option>
            <option value='NBA'>NBA</option>
          </select>
        </form>
        <Link to='/game'>
          <button className='btn-start' type='button' onClick={ () => this.handleStartError() }>Start The Game</button>
        </Link>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  teamInfo: (teamOne, teamTwo) => dispatch(getTeamsInfo(teamOne, teamTwo))
})

export default connect(null, mapDispatchToProps)(HomeContainer)
