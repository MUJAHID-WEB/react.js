import React from 'react'
import { Route } from 'react-router-dom'
import Links from './Links'
import Home from './Home'
import About from './About'

function Routing() {
  return (
    <div>

      <Links />


      <Route path='/about'>< About />      </Route>
      <Route path='/' exact={true}>< Home /> </Route>


    </div> // npm install react-router-dom
  )
}


export default Routing



