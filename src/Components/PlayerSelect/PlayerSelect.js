import React, { Component } from 'react';
import './PlayerSelect.scss';
import { connect } from 'react-redux';
import { selectPlayer } from '../../actions/actions';

export class PlayerSelect extends Component {
  constructor(props) {
    super(props)
    this.state ={
      selectedPlayer: ''
    }
  }

  handleChange = (e) => {
    const player = e.target.value
    this.setState({ selectedPlayer: player })
    this.props.selectPlayer(player, this.props.team, this.props.index)
  }


  render() {
    return(
      <select value={this.state.selectedPlayer} onChange={ (e) => this.handleChange(e) }>
        {this.props.players}
      </select>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  selectPlayer: (player, team, index) => dispatch(selectPlayer(player, team, index)) 
})

export default connect(null, mapDispatchToProps)(PlayerSelect)