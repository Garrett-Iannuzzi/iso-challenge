import React from 'react';
import './GameContainer.scss';
import { connect } from 'react-redux';


const GameContainer = (props) => {

  const { playerInfo, teamInfo } = props;

  const displayLabel = (position) => {
    return(
      <>
        <label>{position}:</label>
      </>
    )
  }

  const getPlayersByPosition = (position) => {
    const filteredPlayers = playerInfo.filter(player => player.position === position);
    const filteredNames = filteredPlayers.reduce((fullName, currentPlayer) => {
      fullName.push(currentPlayer.first_name + ' ' + currentPlayer.last_name)
      return fullName
    }, []);
    const individualPlayerName = filteredNames.map(name => {
      return(
        <option>{name}</option>
      )
    });
    return (
      <select>
        {individualPlayerName}
      </select>
    )
  }

  const getTeamMetric = (id, metric) => {
    const teamOne = teamInfo[0]
    const teamTwo = teamInfo[1]
    if(teamOne.id === id) {
      return teamOne[metric]
    } else {
      return teamTwo[metric]
    }
  }

  return(
    <>
      <div className='game-container'>
        <section className='section-team'>
          <h2>{getTeamMetric(1, 'teamOneName')}</h2>
          <h4>{getTeamMetric(1, 'skillLevelOne')}</h4>
            {displayLabel('Center')}
            {getPlayersByPosition('C')}

            {displayLabel('Guard')}
            {getPlayersByPosition('G')}

            {displayLabel('Guard')}
            {getPlayersByPosition('G')}

            {displayLabel('Forward')}
            {getPlayersByPosition('F')}

            {displayLabel('Forward')}
            {getPlayersByPosition('F')}
        </section>

        <section className='section-team'>
          <h2>{getTeamMetric(2, 'teamTwoName')}</h2>
          <h4>{getTeamMetric(2, 'skillLevelTwo')}</h4>
            {displayLabel('Center')}
            {getPlayersByPosition('C')}

            {displayLabel('Guard')}
            {getPlayersByPosition('G')}

            {displayLabel('Guard')}
            {getPlayersByPosition('G')}

            {displayLabel('Forward')}
            {getPlayersByPosition('F')}

            {displayLabel('Forward')}
            {getPlayersByPosition('F')}
        </section>
      </div>
      <button className='btn-stats'>Get Stats</button>
    </>
  )
}

export const mapState = state => ({
  playerInfo: state.playerInfo,
  teamInfo: state.teamInfo
})

export default connect(mapState)(GameContainer)
