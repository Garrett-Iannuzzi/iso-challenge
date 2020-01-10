import React, { Component } from 'react';
import './HomeContainer.scss';


export class HomeContainer extends Component {
  constructor() {
    super()
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

  // handleStartError = () => {
  //     const { teamOneName, teamTwoName, skillLevelOne, skillLevelTwo } = this.state;
  //     if (teamOneName === '' || teamTwoName === '' || skillLevelOne === '' || skillLevelTwo === '') {

  //     } else {

  //     }
  // }


  render() {
    return(
      <div>
        <form>
          <label for='teamOneName'>Team 1 Name</label>
          <input
            name='teamOneName'
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
            className='input-skillLevelOne'
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
            className='input-skillLevelTwo'
            onChange={ (e) => this.handleChange(e) }
          >
            <option value='And-1'>And-1</option>
            <option value='D League'>D League</option>
            <option value='NBA'>NBA</option>
          </select>
        </form>
        <button className='btn-start' type='button' onClick={ () => this.handleStartError() }>Start The Game</button>
      </div>
    )
  }
}