import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Routing() {
  return (
    <div>
        <Router>
            <Link to='/home'>Home Page</Link> <br/>
            <Link to='/about'>About Page</Link>


          
            {/* <Route path='/home'> 
                < Home/>
            </Route>
            <Route path='/about'> 
                < About/>
            </Route> */}
  
            
        </Router>
    </div> // npm install react-router-dom
  )
}

function Home() {
    return (
      <div>Home</div> 
    )
  }

  function About() {
    return (
      <div>About</div> 
    )
  }

export default Routing