import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import LinuxHome from './components/LinuxComponent/LinuxHome';
import WebserverHome from './components/WebserverComponent/WebserverHome';
import Home from './components/HomeComponents/Home'
import ServiceGridHome from './components/ServiceCard/ServiceCardHome.js'
import AmazonHome from './components/AmazonComponents/AmazonHome.js'
import DockerHome from './components/DockerComponents/DockerHome.js' 
import HadoopHome from './components/HadoopComponent/HadoopHome.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/dashboard' component={ServiceGridHome}/>
        <Route exact path='/aws' component={AmazonHome}/>
        <Route exact path='/docker' component={DockerHome}/>
        <Route exact path='/hadoop' component={HadoopHome}/>
        <Route exact path='/webserver' component={WebserverHome}/>
        <Route exact path='/linux' component={LinuxHome}/>
      </Switch>
    </div>
  );
}

export default App;
