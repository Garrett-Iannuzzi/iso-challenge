import React from 'react';
import './GameContainer.scss';
import { connect } from 'react-redux';
import PlayerSelect from '../../Components/PlayerSelect/PlayerSelect';
import { getStatsInfoOne, getStatsInfoTwo } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { getStats } from '../../apiCalls';
import PropTypes from 'prop-types';
import { Button } from '../../Components/Elements/Button';
import images from '../../images/images';


export const GameContainer = ({ playerInfo, teamInfo, statsInfoOne, statsInfoTwo }) => {

  const displayLabel = (position) => {
    return( <label className='game-label'>{position}:</label> )
  }

  const getPlayersByPosition = (position, team, index) => {
    const filteredPlayers = playerInfo.filter(player => player.position === position);
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

  const createTeamOneBox = (team, teamName, teamSkillLevel, index) => {
    return(
      <section className='section-team'>
      <div className='div-team-info'>
        <h2 className='team-name'>{getTeamMetric(index, teamName)}</h2>
        <h4 className='h4-game'>{getTeamMetric(index, teamSkillLevel)}</h4>
      </div>
      <div className='div-selects-wrap'>
        <div className='div-selects'>
          {displayLabel('Center')}
          {getPlayersByPosition('C', team, 0)}

          {displayLabel('Guard')}
          {getPlayersByPosition('G', team, 1)}

          {displayLabel('Guard')}
          {getPlayersByPosition('G', team, 2)}

          {displayLabel('Forward')}
          {getPlayersByPosition('F', team, 3)}

          {displayLabel('Forward')}
          {getPlayersByPosition('F', team, 4)}
        </div>
        {getRandomImg()}
      </div>
    </section>
    )
  }

  const getRandomImg = () => {
    const randomNum = Math.floor(Math.random() * Math.floor(7));
    return(
      <img className='img-game-container' src={images.funnyImgs[randomNum]} />
    )
  }

  return(
    <>
      <div className='game-container'>
      {createTeamOneBox('teamOne', 'teamOneName', 'skillLevelOne', 1)}
      {createTeamOneBox('teamTwo', 'teamTwoName', 'skillLevelTwo', 2)}
      </div>
      {
        (teamInfo[0].players.length && teamInfo[1].players.length === 5) ? 
          <Link to='/score'>
            <Button btnInfo={{ name: 'Get Stats', fn: handleGetPlayerIds, className: 'btn-stats' }} />
          </Link> : <div className='p-select-player'>Select 5 Players Each</div>
      }
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