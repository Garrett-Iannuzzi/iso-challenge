import React from 'react';
import './ScoreBoard.scss';
import { connect } from 'react-redux';

export const ScoreBoard = (props) => {

  const { statsInfo } = props;

  const getMetric = (metric) => {
    const totalValue = statsInfo.readuce((acc, cv) => {
      acc += cv[metric]
      return acc
    }, 0)
    return totalValue
  }


  return(
    <div>
      <h2 className='h2-score'>Score Board</h2>
      <div className='div-score-board'>
        <section className='section-team-score'>
          <h4 className='h4-score'>Team 1 Name</h4>
          <p>Total Team Shooting Percent: </p>
        </section>
        <section className='section-team-score'>
          <h4 className='h4-score'>Team 2 Name</h4>
          <p>Total Team Shooting Percent: </p>
        </section>
      </div>
    </div>
  )

}

export const mapStateToProps = state => ({
  statsInfo: state.statsInfo
})

export default connect(mapStateToProps)(ScoreBoard)