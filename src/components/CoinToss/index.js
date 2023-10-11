// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {HeadCount: 0, TailCount: 0, TotalCount: 0, IsHead: true}

  TossCoin = () => {
    const {IsHead, HeadCount, TailCount} = this.state

    const randomBool = Math.random() > 0.5
    this.setState({IsHead: randomBool})
    if (IsHead === true) {
      this.setState(prevState => ({
        HeadCount: prevState.HeadCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        TailCount: prevState.TailCount + 1,
      }))
    }
    this.setState({TotalCount: TailCount + HeadCount + 1})
  }

  render() {
    const {IsHead, HeadCount, TailCount, TotalCount} = this.state
    const imgUrl = IsHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    console.log(HeadCount)
    console.log(this.TailCount)

    return (
      <div className="app-container">
        <div className="Coin-container">
          <h1 className="Game_heading">Coin Toss Game</h1>
          <p className="Head_or_Tail_description">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="img" />
          <button type="button" onClick={this.TossCoin} className="Toss_button">
            Toss Coin
          </button>
          <div className="TossCount-container">
            <p className="Count-description">Total: {TotalCount}</p>
            <p className="Count-description">Heads: {HeadCount}</p>
            <p className="Count-description">Tails: {TailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
