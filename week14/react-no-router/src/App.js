import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import HtmlPage from './components/HtmlPage';
import CssPage from './components/CssPage';
import JavaScriptPage from './components/JavaScriptPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: 'HomePage'
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(newPage) {
    this.setState({showPage: newPage});
  }

  render(){
    let currentPage;

    switch (this.state.showPage) {
      case 'HomePage':
        currentPage = <HomePage />;
        break;
      case 'HtmlPage':
        currentPage = <HtmlPage />;
        break;
      case 'CssPage':
        currentPage = <CssPage />;
        break;
      case 'JavaScriptPage':
        currentPage = <JavaScriptPage />;
        break;
      default:
        currentPage = <HomePage />;
    }

    return (
      <div className="App">
        <header>
          <div className='site-name'>
            An Introduction to Web Technologies
          </div>
        </header>
        <nav>
          <ul>
            <li><a onClick={() => this.handlePageChange('HomePage')} href="#">Welcome</a></li>
            <li><a onClick={() => this.handlePageChange('HtmlPage')} href="#">HTML</a></li>
            <li><a onClick={() => this.handlePageChange('CssPage')} href="#">CSS</a></li>
            <li><a onClick={() => this.handlePageChange('JavaScriptPage')} href="#">JavaScript</a></li>
          </ul>
        </nav>
        <div className='content'>
          {currentPage}
        </div>
      </div>
    );
  }
}

export default App;
