import React, { Component, createRef } from 'react'

export default class Refuse extends Component {
    constructor(){
        super();
        this.inputRef = createRef();
    }
    componentDidMount(){
        //console.warn(this.inputRef.current.value='1000')
    }
    getValue(){
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color='red'
        this.inputRef.current.style.backgroundColor='blue'

    }


  render() {
    return (
      <div>
        <h1>Ref in React Class Component</h1>
        <input type='text' ref={this.inputRef}/>
        <button onClick={()=>this.getValue()}>Check Ref</button>
      </div>
    )
  }
}
