import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import HtmlPage from './components/HtmlPage';
import CssPage from './components/CssPage';
import JavaScriptPage from './components/JavaScriptPage';
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <Router>
      <div className="App">
        <header>
          <div className='site-name'>
            An Introduction to Web Technologies
          </div>
        </header>
        <nav>
          <ul>
            <li><NavLink to="/">Welcome</NavLink></li>
            <li><NavLink to="/html">HTML</NavLink></li>
            <li><NavLink to="/css">CSS</NavLink></li>
            <li><NavLink to="/javascript">JavaScript</NavLink></li>
          </ul>
        </nav>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/html" element={<HtmlPage/>} />
            <Route path="/css" element={<CssPage />} />
            <Route path="/javascript/*" element={<JavaScriptPage />} />
          </Routes>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
