// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onSubscribe = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(prevState => ({text: 'Subscribed'}))
    } else {
      this.setState(prevState => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading-1">Welcome</h1>
          <p className="paragraph-1">Thank you! Happy Learning</p>
          <div className="btn-container">
            <button className="btn-style" onClick={this.onSubscribe}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
