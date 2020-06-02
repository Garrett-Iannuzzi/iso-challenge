import React, { Component } from 'react';
import './HomeContainer.scss';
import Error from '../../Components/Error/Error';
import { connect } from 'react-redux';
import { getTeamsInfo, isLoggedIn } from '../../actions/actions';
import PropTypes from 'prop-types';
import { 
  // Button, 
  DisclosureContent, 
  Box, 
  Tabbable, 
  Checkbox,
} from "reakit";
import { Button } from '../../Components/Elements/Button'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state ={
      teamOneName: '',
      teamTwoName: '',
      skillLevelOne: 'And-1',
      skillLevelTwo: 'And-1',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  showError = () => {
    return(
      <Error history={this.props.history}/>
    )
  }

  submitTeams = () => {
    const { teamOneName, teamTwoName, skillLevelOne, skillLevelTwo } = this.state;
    const teamOne = { teamOneName, skillLevelOne, players: [] };
    const teamTwo = { teamTwoName, skillLevelTwo, players: [] };
    this.props.teamInfo(teamOne, teamTwo)
  }
  
  handleStartError = () => {
    const {teamOneName, teamTwoName, skillLevelOne, skillLevelTwo } = this.state;
    if (teamOneName === '' || teamTwoName === '' || skillLevelOne === '' || skillLevelTwo === '') {
      return this.props.isLoggedIn(false)
    } else {
      this.props.isLoggedIn(true)
      this.submitTeams()
      this.props.history.push('/game')
    }
  }
  

  render() {
    const { teamOneName, teamTwoName, skillLevelOne, skillLevelTwo } = this.state;

    if(this.props.login === false) {
      return(this.showError())
    }
    
    return(
      <Tabbable> 
        <div className='div-select-team'>
          <form>
            <label for='teamOneName'>Team 1 Name:</label>
            <input
              name='teamOneName'
              className='input-team-one'
              value={teamOneName}
              placeholder='Enter Team Name'
              type='text'
              maxLength='25'
              onChange={ (e) => this.handleChange(e) }
            />
          <Checkbox as={Box}>
            {teamOneName ? "😄" : "😞"}
          </Checkbox>
            <label for='skillLevelOne'>Select Level:</label>
            <select
              id='skillLevelOne'
              value={skillLevelOne}
              name='skillLevelOne'
              className='select-skill-one'
              onChange={ (e) => this.handleChange(e) }
            >
              <option value='And-1'>And-1</option>
              <option value='D League'>D League</option>
              <option value='NBA'>NBA</option>
            </select>
          </form>
          <form>
            <label for='teamNameTwo'>Team 2 Name:</label>
            <input
              name='teamTwoName'
              className='input-team-two'
              value={teamTwoName}
              placeholder='Enter Team Name'
              type='text'
              maxLength='25'
              onChange={ (e) => this.handleChange(e) }
            />
            <Checkbox as={Box}>
              {teamTwoName ? "😄" : "😞"}
            </Checkbox>
            <label for='skillLevelTwo'>Select Level:</label>
            <select
              id='skillLevelTwo'
              value={skillLevelTwo}
              name='skillLevelTwo'
              className='select-skill-two'
              onChange={ (e) => this.handleChange(e) }
            >
              <option value='And-1'>And-1</option>
              <option value='D League'>D League</option>
              <option value='NBA'>NBA</option>
            </select>
          </form>
        </div>
        <DisclosureContent className='btn-start' visible as='button' onClick={ () => this.handleStartError() }>Start The Game</DisclosureContent>
        {/* <Button className='btn-start' as='button' onClick={ () => this.handleStartError() }>Btn</Button> */}
        <Button btnInfo={{ name: 'Start The Game' }} />
      </Tabbable>
    )
  }
}

export const mapStateToProps = state => ({
  login: state.isLoggedIn
})

export const mapDispatchToProps = dispatch => ({
  teamInfo: (teamOne, teamTwo) => dispatch(getTeamsInfo(teamOne, teamTwo)),
  isLoggedIn: (status) => dispatch(isLoggedIn(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

HomeContainer.propTypes = {
  login: PropTypes.bool,
  isLoggedIn: PropTypes.func,
  teamInfo: PropTypes.func,
  history: PropTypes.func
}
