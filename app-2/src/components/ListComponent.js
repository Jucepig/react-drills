import React, {Component} from 'react'

class ListComponent extends Component {
  constructor() {
    super()

    this.state = {
      array : ['Hello', 'this', 'is', 'an', 'array', 'of', 'strings']
    }
  }

  render() {
    return (
      <div>
        <h1>This is the ListComponent</h1>
        <div>
            {this.state.array.map((el)=>{
              return (
                <h2>{el}</h2>
              )
            })}
        </div>
      </div>
    )
  }
}

export default ListComponent