import React, {Component} from 'react'

class ListComponent extends Component {
  constructor() {
    super()

    this.state = {
      listArray : ["Hello","this","is","an","array","of","strings"]
    }
  }

  render() {
    return (
      <div>
        {this.state.listArray.map((el)=>{
          return(
            <h2>{el}</h2>
          )
        })}
      </div>
    )
  }
}

export default ListComponent