import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './components/Home'
import Profile from './components/Profile';
import Personal from './components/Personal'
import Props from './components/Props'
import State from './components/StateinClass';
import EventNFunc from './components/EventNFunc';
import StateinFunc from './components/StateinFunc';
import InputBoxValueGet from './components/InputBoxValueGet';
import HideShowElement from './components/HideShowElement';
import Conditional from './components/Conditional';
import Form from './components/Form';
import LcmClassCom from './components/LcmClassCom';
import LcmFunction from './components/LcmFunction';
import StyleType from './components/StyleType';
import ArrayList from './components/ArrayList';
import ReuseComponent from './components/ReuseComponent';
import ChildData from './components/ChildData';
import UseMemo from './components/UseMemo';
import Refuse from './components/RefInClass';
import RefInFunc from './components/RefInFunc';
import ForwardRef from './components/ForwardRef';

function App() {
  //
  // function getData(data){
  //   //alert(name) // grab the data from child by sending Func Name with props
  //   console.log(data)
  //   alert(data.email )
  // }
  //
  const [name, setName] = React.useState('Mujahidul')
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React tutorial
        </a>
        <Home />
        <Profile /> 
        <Personal text='Personal Functional Prop Called'/> */}

        {/* <Props text=' Props Component' data={getData}/>  */}
        {/* <Props text={{name: 'Mujahid '}} data='Props Data Component'/>  */}
        {/* <State /> */}
        {/* <EventNFunc /> */}
        {/* <StateinFunc /> */}
        {/* <InputBoxValueGet /> */}
        {/* <HideShowElement /> */}
        {/* <Conditional /> */}
        {/* <Form /> */}
        {/* <LcmClassCom name={name}/>
        <button onClick={()=>setName('Islam')}> Update Name </button> */}
        {/* <LcmFunction /> */}
        {/* <StyleType /> */}
        {/* <ArrayList /> */}
        {/* <ChildData alert={getData}/> */} 
        {/* <UseMemo /> */}
        {/* <Refuse /> */}
        <RefInFunc />
        <ForwardRef />

        
        
      </header>

      {/* {
        React.createElement(
          'h1',
          {className: 'App'},
          'Hello JSX'
        )
      } */}

    </div>
  );
}

export default App;
