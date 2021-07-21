// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  emojiClicked = () => {
    const {clickedEmojiList, emojiData} = this.props
    const {id} = emojiData
    clickedEmojiList(id)
  }

  render() {
    const {emojiData} = this.props
    const {emojiName, emojiUrl} = emojiData
    return (
      <li className="emoji-container" onClick={this.emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-logo" />
      </li>
    )
  }
}

export default EmojiCard
