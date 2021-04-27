import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      magicCards : []
    }
  }

  componentDidMount() {
    axios
    .get('https://api.magicthegathering.io/v1/cards')
    .then(res => {
      console.log(res.data.cards)
      this.setState({
        magicCards : res.data.cards
      })
    })
    .catch (err => {
      console.log('GET request failed err: ' + err)
    })
  }


  render() {
    const {magicCards} = this.state
    return (
      <div className="App">
        {magicCards.map((card) => {
          return(
            <div>
              <h3>{card.name}</h3>
              <img src={card.imageUrl} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
