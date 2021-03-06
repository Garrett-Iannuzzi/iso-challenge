import React from 'react';
import './ScoreBoard.scss';
import { connect } from 'react-redux';
import images from '../../images/images';
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

  const getWinnerTotal = () => {
    const metrics = ['pts', 'ast', 'reb', 'blk', 'stl'];
    const totalPlayerOne = metrics.reduce((total, metric) => {
      total += getMetric(statsInfoOne, metric);
      return total
    }, 0);
    const totalPlayerTwo = metrics.reduce((total, metric) => {
      total += getMetric(statsInfoTwo, metric);
      return total
    }, 0);

    if(totalPlayerOne > totalPlayerTwo) {
      return teamsInfo[0].teamOneName
    } 
    return teamsInfo[1].teamTwoName
  }

  return(
    <div>
      <div className='div-score-board'>
        <section className='section-team-score'>
          <div className='div-name-skill'>
            <h4 className='h4-score'>{teamsInfo[0].teamOneName}</h4>
            <h5 className='h5-skill'>SkillLevel: {teamsInfo[0].skillLevelOne}</h5>
          </div>

          <p><b>Total Points:</b> {getMetric(statsInfoOne, 'pts')}</p>
          <p><b>Total Assists:</b> {getMetric(statsInfoOne, 'ast')}</p>
          <p><b>Total Rebounds:</b> {getMetric(statsInfoOne, 'reb')}</p>
          <p><b>Total Blocks:</b> {getMetric(statsInfoOne, 'blk')}</p>
          <p className='p-final'><b>Total Steals:</b>   {getMetric(statsInfoOne, 'stl')}</p>
        </section>

        <section className='section-score-board'>
          <h4 className='h4-score-board'>Winner:</h4>
          <p className='winner-name'>{ getWinnerTotal() }</p>
          <img src={images.basketball} alt='Basketball image' className='img-basketball'/>
          <button className='btn btn-score-board'>Save Matchup</button>
        </section>

        <section className='section-team-score'>
          <div className='div-name-skill'>
            <h4 className='h4-score'>{teamsInfo[1].teamTwoName}</h4>
            <h5 className='h5-skill'>SkillLevel: {teamsInfo[1].skillLevelTwo}</h5>
          </div>

          <p><b>Total Points:</b> {getMetric(statsInfoTwo, 'pts')}</p>
          <p><b>Total Assists:</b> {getMetric(statsInfoTwo, 'ast')}</p>
          <p><b>Total Rebounds:</b> {getMetric(statsInfoTwo, 'reb')}</p>
          <p><b>Total Blocks:</b> {getMetric(statsInfoTwo, 'reb')}</p>
          <p className='p-final'><b>Total Steals:</b>   {getMetric(statsInfoTwo, 'stl')}</p>
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