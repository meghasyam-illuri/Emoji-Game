// Write your code here.
import {Component} from 'react'
import './index.css'

const wonImageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImageUrl =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

class WinOrLoseCard extends Component {
  render() {
    const {didWon, playAgain, score} = this.props
    return (
      <div className="result-container">
        <div className="image-container">
          <img
            src={didWon ? wonImageUrl : loseImageUrl}
            alt={didWon ? 'laughing balloons' : 'sad balloons'}
            className="balloon-image"
          />
        </div>
        <div className="result-section">
          <h1 className="result-text">{didWon ? 'You Won' : 'You Lose'}</h1>
          <p className="score-text">{didWon ? 'Best Score' : 'Score'}</p>
          <p className="result-score">{score}/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
