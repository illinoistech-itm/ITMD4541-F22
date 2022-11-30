import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import TopRepos from './components/TopRepos';
import {Route, Routes} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Header />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<TopRepos selectedLanguage='All' />} />
            <Route path="/html" element={<TopRepos selectedLanguage='HTML' />} />
            <Route path="/css" element={<TopRepos selectedLanguage='CSS' />} />
            <Route path="/javascript" element={<TopRepos selectedLanguage='JavaScript' />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
