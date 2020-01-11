import React from 'react';
import './GameContainer.scss';
import { connect } from 'react-redux';


const GameContainer = (props) => {

  const doIt = (position) => {
    return(
      <>
        <label>{position}:</label>
      </>
    )
  }

  const getPlayersByPosition = (position) => {
    const filteredPlayers = props.playerInfo.filter(player => player.position === position);
    const filteredNames = filteredPlayers.reduce((fullName, currentPlayer) => {
      fullName += currentPlayer.first_name + ' ' + currentPlayer.last_name
      return fullName
    }, '')
    return (
      <select>
        <option>{filteredNames}</option>
      </select>
    )
  }

  return(
    <>
      <div className='game-container'>
        <section className='section-team'>
          <h2>Team Name</h2>
          <h4>Skill Level</h4>
            {doIt('Center')}
            {getPlayersByPosition('C')}

            {doIt('Guard')}
            {getPlayersByPosition('G')}

            {doIt('Guard')}
            {getPlayersByPosition('G')}

            {doIt('Forward')}
            {getPlayersByPosition('F')}

            {doIt('Forward')}
            {getPlayersByPosition('F')}
        </section>
        <section className='section-team'>
          <h2>Team Name</h2>
          <h4>Skill Level</h4>
            {doIt('Center')}
            {getPlayersByPosition('C')}

            {doIt('Guard')}
            {getPlayersByPosition('G')}

            {doIt('Guard')}
            {getPlayersByPosition('G')}

            {doIt('Forward')}
            {getPlayersByPosition('F')}

            {doIt('Forward')}
            {getPlayersByPosition('F')}
        </section>
      </div>
      <button className='btn-stats'>Get Stats</button>
    </>
  )
}

export const mapState = state => ({
  playerInfo: state.playerInfo
})

export default connect(mapState)(GameContainer)
