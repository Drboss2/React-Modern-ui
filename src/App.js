import React from "react";
import {Footer,Header,Features,Blog,Possiblity,WhatGP3} from './containers'
import {Cta,Brand,Navbar} from './components'
import './App.css'

function App() {
  return (
  <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGP3/>
    <Features/>
    <Possiblity/>
    <Cta/>
    <Blog/>
    <Footer/>
  </div>
  );
}
export default App;
