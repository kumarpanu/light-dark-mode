// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isColor: true}

  changeMode = () => {
    this.setState(prevState => ({isColor: !prevState.isColor}))
  }

  changeText = () => {
    const {isColor} = this.state

    return isColor ? 'Light Mode' : 'Dark Mode'
  }

  changeBack = () => {
    const {isColor} = this.state

    return isColor ? 'light-mode' : 'dark-mode'
  }

  changeHeadingColor = () => {
    const {isColor} = this.state

    return isColor ? 'black-mode' : 'white-mode'
  }

  changeButtonRadius = () => {
    const {isColor} = this.state

    return isColor ? 'button' : 'white-button'
  }

  render() {
    const text = this.changeText()
    const background = this.changeBack()
    const headingColor = this.changeHeadingColor()
    const buttonChange = this.changeButtonRadius()

    return (
      <div className="main-container">
        <div className={`dark-light-container ${background}`}>
          <h1 className={`heading ${headingColor}`}>Click To Change Mode</h1>
          <button
            className={`button ${buttonChange}`}
            type="button"
            onClick={this.changeMode}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
