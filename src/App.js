import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element = {<News key="general" pageSize={9} category={'general'} country={'in'} />}></Route>
        <Route path="/business" element = {<News key="business" pageSize={9} category={'business'} country={'in'} />}></Route>
        <Route path="/entertainment" element = {<News key="entertainment" pageSize={9} category={'entertainment'} country={'in'} />}></Route>
        <Route path="/general" element = {<News key="general" pageSize={9} category={'general'} country={'in'} />}></Route>
        <Route path="/health" element = {<News key="health" pageSize={9} category={'health'} country={'in'} />}></Route>
        <Route path="/science" element = {<News key="science" pageSize={9} category={'science'} country={'in'} />}></Route>
        <Route path="/sports" element = {<News key="sports" pageSize={9} category={'sports'} country={'in'} />}></Route>
        <Route path="/technology" element = {<News key="technology" pageSize={9} category={'technology'} country={'in'} />}></Route>
          {/* <Route path="/home"><News pageSize={9} category={'general'} country={'in'} /></Route>
          <Route path="/business"><News pageSize={9} category={'business'} country={'in'} /></Route>
          <Route path="/entertainment"><News pageSize={9} category={'entertainment'} country={'in'} /></Route>
          <Route path="/general"><News pageSize={9} category={'general'} country={'in'} /></Route>
          <Route path="/health"><News pageSize={9} category={'health'} country={'in'} /></Route>
          <Route path="/science"><News pageSize={9} category={'science'} country={'in'} /></Route>
          <Route path="/sports"><News pageSize={9} category={'sports'} country={'in'} /></Route>
          <Route path="/technology"><News pageSize={9} category={'technology'} country={'in'} /></Route> */}
        </Routes>
        </Router>
      </div>
    )
  }
}