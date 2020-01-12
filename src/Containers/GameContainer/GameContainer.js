import React from 'react';
import './GameContainer.scss';
import { connect } from 'react-redux';
import PlayerSelect from '../../Components/PlayerSelect/PlayerSelect';
import { Link } from 'react-router-dom';

const GameContainer = (props) => {

  const { playerInfo, teamInfo } = props;

  const displayLabel = (position) => {
    return(
      <>
        <label>{position}:</label>
      </>
    )
  }

  const getPlayersByPosition = (position, team, index) => {
    const filteredPlayers = playerInfo.filter(player => player.position === position || !player.position);
    const filteredNames = filteredPlayers.reduce((fullName, currentPlayer) => {
      fullName.push(currentPlayer.last_name + ',' + currentPlayer.first_name)
      return fullName.sort()
    }, []);
    const individualPlayerName = filteredNames.map(name => {
      return(
        <option>{name}</option>
      )
    });
    return (
      <PlayerSelect 
        players={individualPlayerName}
        index={index}
        team={team} 
      />
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

  const getPlayerIds = (index) => {
    const playerIds = teamInfo[index].players.map(player => {
      const playerLastName = player.split(',')[0];
      const playerFirstName = player.split(',')[1];
      return playerInfo.find(hoopStar => hoopStar.last_name === playerLastName && hoopStar.first_name === playerFirstName).id
    })
    return playerIds
    // handleGetStats()
  }

  // handleGetStats = (playerIds) => {
  //   getStats(playerIds)
  //     .then(res => this.props.statsInfo(res.data))
  // }

  return(
    <>
      <div className='game-container'>
        <section className='section-team'>
          <h2>{getTeamMetric(1, 'teamOneName')}</h2>
          <h4>{getTeamMetric(1, 'skillLevelOne')}</h4>
            {displayLabel('Center')}
            {getPlayersByPosition('C', 'teamOne', 0)}

            {displayLabel('Guard')}
            {getPlayersByPosition('G', 'teamOne', 1)}

            {displayLabel('Guard')}
            {getPlayersByPosition('G', 'teamOne', 2)}

            {displayLabel('Forward')}
            {getPlayersByPosition('F', 'teamOne', 3)}

            {displayLabel('Forward')}
            {getPlayersByPosition('F', 'teamOne', 4)}
        </section>

        <section className='section-team'>
          <h2>{getTeamMetric(2, 'teamTwoName')}</h2>
          <h4>{getTeamMetric(2, 'skillLevelTwo')}</h4>
            {displayLabel('Center')}
            {getPlayersByPosition('C', 'teamTwo', 0)}

            {displayLabel('Guard')}
            {getPlayersByPosition('G', 'teamTwo', 1)}

            {displayLabel('Guard')}
            {getPlayersByPosition('G', 'teamTwo', 2)}

            {displayLabel('Forward')}
            {getPlayersByPosition('F', 'teamTwo', 3)}

            {displayLabel('Forward')}
            {getPlayersByPosition('F', 'teamTwo', 4)}
        </section>
      </div>
      <Link to='/score'>
        <button className='btn-stats' onClick={ () => getPlayerIds(0) }>Get Stats</button>
      </Link>
    </>
  )
}

export const mapStateToProps = state => ({
  playerInfo: state.playerInfo,
  teamInfo: state.teamInfo
})

export default connect(mapStateToProps)(GameContainer)
