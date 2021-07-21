import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {displayResult: false, clickedEmoji: [], topScoreResult: 0}

  shuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateTopScore = value => {
    const {topScoreResult} = this.state
    if (value > topScoreResult) {
      this.setState({topScoreResult: value})
    }
  }

  updateDisplayResult = value => {
    this.setState({displayResult: value})
  }

  gameOverAndUpdateScore = newTopScore => {
    this.updateTopScore(newTopScore)
    this.updateDisplayResult(true)
  }

  clickedEmojiList = id => {
    const {clickedEmoji} = this.state
    const {emojisList} = this.props
    const isEmojiClicked = clickedEmoji.includes(id)
    const updateScore = clickedEmoji.length

    if (isEmojiClicked) {
      this.gameOverAndUpdateScore(updateScore)
    } else {
      if (emojisList.length - 1 === updateScore) {
        this.gameOverAndUpdateScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, id],
      }))
    }
  }

  playAgain = () => {
    this.setState({clickedEmoji: []})
    this.updateDisplayResult(false)
  }

  render() {
    const shuffledEmojiData = this.shuffledEmojiList()
    const {displayResult, clickedEmoji, topScoreResult} = this.state
    const {emojisList} = this.props
    const didWon = clickedEmoji.length === emojisList.length
    console.log(shuffledEmojiData)
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmoji.length}
          topScore={topScoreResult}
          gameOver={displayResult}
        />
        <div className="body-section">
          {displayResult ? (
            <WinOrLoseCard
              didWon={didWon}
              playAgain={this.playAgain}
              score={clickedEmoji.length}
            />
          ) : (
            <ul className="emoji-section">
              {shuffledEmojiData.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiData={eachEmoji}
                  clickedEmojiList={this.clickedEmojiList}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
