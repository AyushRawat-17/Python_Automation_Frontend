import React from 'react';
import './App.css';
// import LinuxHome from './components/LinuxComponent/LinuxHome';
// import WebserverHome from './components/WebserverComponent/WebserverHome';
// import Home from './components/HomeComponents/Home'
import ServiceGrid from './components/ServiceCard/ServiceGrid'
// import AmazonHome from './components/AmazonComponents/AmazonHome.js'
// import DockerHome from './components/DockerComponents/DockerHome.js' 
// import HadoopHome from './components/HadoopComponent/HadoopHome.js'

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <ServiceGrid/>
      {/* <AmazonHome/> */}
      {/* <DockerHome/> */}
      {/* <HadoopHome/> */}
      {/* <LinuxHome/> */}
      {/* <WebserverHome/> */}
    </div>
  );
}

export default App;
