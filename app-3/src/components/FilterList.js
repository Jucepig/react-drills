import React, {Component} from 'react'

class FilterList extends Component {
  constructor() {
    super()

    this.state = {
      filterVal : '',
      array : ['pikachu', 'charizard', 'venusaur', 'hitmonchamp', 'hitmonlee', 'nidoqueen', 'nidoqueen']
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    this.setState({
      filterVal : val
    })
  }

  render() {
    return(
      <div>
        <input placeholder={"What should be filtered?"} onChange={(e) => {this.handleChange(e.target.value)}} />
        <div>
          {this.state.array
          .filter((el)=>{
            return el.includes(this.state.filterVal)
          })
          .map((el)=>{
            return(
              <h2>{el}</h2>
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default FilterList