// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {currentScore, topScore, gameOver} = this.props
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="Emoji Logo"
            className="game-logo"
          />
          <h1 className="game-title">Emoji Game</h1>
        </div>
        {gameOver ? null : (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    )
  }
}

export default NavBar
