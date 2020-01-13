import React from 'react';
import './ScoreBoard.scss';


const ScoreBoard = () => {
  return(
    <div>
      <h2>Score Board</h2>
      <div className='div-score-board'>
        <section className='section-team-score'>
          <h4>Team 1 Name</h4>
        </section>
        <section className='section-team-score'>
          <h4>Team 2 Name</h4>
        </section>
      </div>
    </div>
  )

}

export default ScoreBoard;