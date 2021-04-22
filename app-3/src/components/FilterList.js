import React, {Component} from 'react'

class FilterList extends Component {
  constructor() {
    super()

    this.state = {
      array : ['pikachu', 'charizard', 'squirtle', 'bulbasaur', 'meowth', 'ekans', 'koffing' ], 
      inputVal : ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    this.setState({
      inputVal : val
    })
  }

  render () {
    return(
      <div>
        <h1>This is the FilterList</h1>
        <input onChange={(e)=>{this.handleChange(e.target.value)}} />
        <div>
          {this.state.array
          .filter((el)=>{
            return el.includes(this.state.inputVal)
          })
          .map((el)=>{
            return(
              <h3>{el}</h3>
            )
          })}
        </div>
      </div>
    )
  }
}

export default FilterList;

