import React from 'react';
import './ScoreBoard.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const ScoreBoard = (props) => {

  const { statsInfoOne, statsInfoTwo, teamsInfo } = props;

  const getMetric = (team, metric) => {
    const totalValue = team.reduce((total, statSheet) => {
     statSheet.data.map(statLine => total += statLine[metric])
      return total
    }, 0)
    return totalValue
  }

  return(
    <div>
      <h2 className='h2-score'>Score Board</h2>
      <div className='div-score-board'>
        <section className='section-team-score'>
          <h4 className='h4-score'>{teamsInfo[0].teamOneName}</h4>
          <h5 className='h5-skill'>SkillLevel: {teamsInfo[0].skillLevelOne}</h5>
          <p><b>Your Total Points:</b> {getMetric(statsInfoOne, 'pts')}</p>
          <p><b>Your Total Assists:</b> {getMetric(statsInfoOne, 'ast')}</p>
          <p><b>Your Total Rebounds:</b> {getMetric(statsInfoOne, 'reb')}</p>
          <p><b>Your Total Blocks:</b> {getMetric(statsInfoOne, 'reb')}</p>
          <p><b>Your Total Steals:</b> {getMetric(statsInfoOne, 'stl')}</p>
        </section>
        <section className='section-team-score'>
          <h4 className='h4-score'>{teamsInfo[1].teamTwoName}</h4>
          <h5 className='h5-skill'>SkillLevel: {teamsInfo[1].skillLevelTwo}</h5>
          <p><b>Your Total Points:</b> {getMetric(statsInfoTwo, 'pts')}</p>
          <p><b>Your Total Assists:</b> {getMetric(statsInfoTwo, 'ast')}</p>
          <p><b>Your Total Rebounds:</b> {getMetric(statsInfoTwo, 'reb')}</p>
          <p><b>Your Total Blocks:</b> {getMetric(statsInfoTwo, 'reb')}</p>
          <p><b>Your Total Steals:</b> {getMetric(statsInfoTwo, 'stl')}</p>
        </section>
      </div>
    </div>
  )

}

export const mapStateToProps = state => ({
  teamsInfo: state.teamInfo,
  statsInfoOne: state.statsInfoOne,
  statsInfoTwo: state.statsInfoTwo
})

export default connect(mapStateToProps)(ScoreBoard)

ScoreBoard.propTypes = {
  teamsInfo: PropTypes.func,
  statsInfoOne: PropTypes.func,
  statsInfoTwo: PropTypes.func
}