import React from 'react';
import './ScoreBoard.scss';
import { connect } from 'react-redux';

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
          <h5>SkillLevel: {teamsInfo[0].skillLevelOne}</h5>
          <p>Your Total Points: {getMetric(statsInfoOne, 'pts')}</p>
          <p>Your Total Assists: {getMetric(statsInfoOne, 'ast')}</p>
          <p>Your Total Rebounds: {getMetric(statsInfoOne, 'reb')}</p>
          <p>Your Total Blocks: {getMetric(statsInfoOne, 'reb')}</p>
          <p>Your Total Steals: {getMetric(statsInfoOne, 'stl')}</p>
        </section>
        <section className='section-team-score'>
          <h4 className='h4-score'>{teamsInfo[1].teamTwoName}</h4>
          <h5>SkillLevel: {teamsInfo[1].skillLevelTwo}</h5>
          <p>Your Total Points: {getMetric(statsInfoTwo, 'pts')}</p>
          <p>Your Total Assists: {getMetric(statsInfoTwo, 'ast')}</p>
          <p>Your Total Rebounds: {getMetric(statsInfoTwo, 'reb')}</p>
          <p>Your Total Blocks: {getMetric(statsInfoTwo, 'reb')}</p>
          <p>Your Total Steals: {getMetric(statsInfoTwo, 'stl')}</p>
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