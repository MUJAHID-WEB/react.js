import React, { Component } from 'react'
import Profile from './Profile';

class LcmClassCom extends React.Component {

    constructor(){
        super(); 
        this.state={   // State calls before html calls
            email:'mujahid@gmail.com',
            count: 0,
            show: true
        }

        console.warn('constructor') // execute first
    }
    ///////////////////
    componentDidMount(){  // componentDidMount calls after all calls done and never calls. ex. API calling
      console.warn('componentDidMount',) // then componentDidMount call Third
    }
    //////////////////////
    shouldComponentUpdate(){
      console.warn('shouldComponentUpdate', this.state.count) // by default it stop rendering
      if (this.state.count>1 && this.state.count<10){
      return true
      }
    }
    //
    ///////////////////////// it will not be invoked if 'shouldComponentUpdate() returns false

    componentDidUpdate(prevProps, prevState, snapshot){  // componentDidUpdate calls state and props call
      console.warn('componentDidUpdate', prevState.count) // print previous one
      console.warn('componentDidUpdate', snapshot)  // undefiend

      if (this.state.count<10){
        this.setState({count: this.state.count+1}) // state can change with condition, otherwise it will go to infite loop
      }
    }
    //
    //
  render() {  

    console.warn('render', this.props) // then render call second
    return (
      <div>
        LcmClassCom

        <h1> {this.state.email} </h1>
        <button onClick={()=>this.setState({email: 'islam@yahoo.com'})}> Update Email </button> {/* email change from constructor by state */}

        <h1> {this.props.name} </h1>  {/* name change from app.js by props */}

        <h1> {this.state.count} </h1>
        <button onClick={()=>this.setState({count: this.state.count+1})}> Update Count </button> {/* count change from componenrDidUpdate by state */}



        {
          this.state.show? 
          <Profile />
          :<h1> Child Compnent Removed</h1> 
        }
        
        <button onClick={()=>this.setState({show:!this.state.show})}> Toggle </button>  {/* componentWillUnmount call in Profile */}

      </div>

      
    )
  }
}

export default LcmClassCom


// Mounting
// constructor
// render
// componentDidMount

//

// Updating
// New props, setState, forceUpdate
// shouldComponentUpdate - can stop rendering
// render
// componentDidUpdate

//

// componentWillUnmount
