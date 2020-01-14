import React from 'react';
import './GameContainer.scss';
import { connect } from 'react-redux';
import PlayerSelect from '../../Components/PlayerSelect/PlayerSelect';
import { getStatsInfoOne, getStatsInfoTwo } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { getStats } from '../../apiCalls';
import PropTypes from 'prop-types';

export const GameContainer = (props) => {

  const { playerInfo, teamInfo, statsInfoOne, statsInfoTwo } = props;

  const displayLabel = (position) => {
    return( <label className='game-label'>{position}:</label> )
  }

  const getPlayersByPosition = (position, team, index) => {
    const filteredPlayers = playerInfo.filter(player => player.position === position || !player.position);
    const filteredNames = filteredPlayers.reduce((fullName, currentPlayer) => {
      fullName.push(currentPlayer.last_name + ', ' + currentPlayer.first_name)
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

  const handleGetPlayerIds = () => {
    const playerIdsTeamOne = teamInfo[0].players.map(player => {
      const playerLastName = player.split(', ')[0];
      const playerFirstName = player.split(', ')[1];
      return playerInfo.find(hoopStar => hoopStar.last_name === playerLastName && hoopStar.first_name === playerFirstName).id
    })
    const playerIdsTeamTwo = teamInfo[1].players.map(player => {
      const playerLastName = player.split(', ')[0];
      const playerFirstName = player.split(', ')[1];
      return playerInfo.find(hoopStar => hoopStar.last_name === playerLastName && hoopStar.first_name === playerFirstName).id
    })

    const groupedIds = [ playerIdsTeamOne, playerIdsTeamTwo ]
    getPlayerIds(groupedIds)
  }

  const getPlayerIds = (playerIds) => {
    handleGetStats(playerIds[0]).then(data => statsInfoOne(data));
    handleGetStats(playerIds[1]).then(data => statsInfoTwo(data));
  }

  const handleGetStats = (playerIds) => {
    let promises = getStats(playerIds)
    return Promise.all(promises).then(info => {
      return info
    })
  }

  return(
    <>
      <div className='game-container'>
        <section className='section-team'>
          <h2 className='team-name'>{getTeamMetric(1, 'teamOneName')}</h2>
          <h4 className='h4-game'>{getTeamMetric(1, 'skillLevelOne')}</h4>
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
          <h2 className='team-name'>{getTeamMetric(2, 'teamTwoName')}</h2>
          <h4 className='h4-game'>{getTeamMetric(2, 'skillLevelTwo')}</h4>
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
        <button className='btn-stats' onClick={ () => handleGetPlayerIds() }>Get Stats</button>
      </Link>
    </>
  )
}

export const mapStateToProps = state => ({
  playerInfo: state.playerInfo,
  teamInfo: state.teamInfo
})

export const mapDispatchToProps = dispatch => ({
  statsInfoOne: (statsTeamOne) => dispatch(getStatsInfoOne(statsTeamOne)),
  statsInfoTwo: (statsTeamTwo) => dispatch(getStatsInfoTwo(statsTeamTwo))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)

GameContainer.propTypes = {
  playerInfo: PropTypes.func,
  teamInfo: PropTypes.func,
  statsInfoOne: PropTypes.func,
  statsInfoTwo: PropTypes.func
}