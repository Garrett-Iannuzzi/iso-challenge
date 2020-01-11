import React from 'react';
import './GameContainer.scss';

const GameContainer = () => {
  return(
    <>
      <div className='game-container'>
        <section className='section-team'>
          <h2>Team Name</h2>
          <h4>Skill Level</h4>
          <label>Center:</label>
          <select>
            <option></option>
          </select>
          <label>Guard:</label>
          <select>
            <option></option>
          </select>
          <label>Guard:</label>
          <select>
            <option></option>
          </select>
          <label>Forward:</label>
          <select>
            <option></option>
          </select>
          <label>Forward:</label>
          <select>
            <option></option>
          </select>
        </section>
        <section className='section-team'>
          <h2>Team Name</h2>
          <h4>Skill Level</h4>
          <label>Center:</label>
          <select>
            <option></option>
          </select>
          <label>Guard:</label>
          <select>
            <option></option>
          </select>
          <label>Guard:</label>
          <select>
            <option></option>
          </select>
          <label>Forward:</label>
          <select>
            <option></option>
          </select>
          <label>Forward:</label>
          <select>
            <option></option>
          </select>
        </section>
      </div>
      <button className='btn-stats'>Get Stats</button>
    </>
  )
}

export default GameContainer;