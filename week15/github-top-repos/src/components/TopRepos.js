import React from "react";
import Loading from "./Loading";
import RepoDetails from "./RepoDetails";
import TopReposList from "./TopReposList";
import LoadingError from "./LoadingError";

class TopRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      status: '',
      selectedRepo: null,
      errorMsg: ''
    };
    this.loadRepos = this.loadRepos.bind(this);
    this.selectRepo = this.selectRepo.bind(this);
  }

  componentDidMount(){
    this.loadRepos(this.props.selectedLanguage);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.selectedLanguage !== prevProps.selectedLanguage) {
      this.loadRepos(this.props.selectedLanguage);
    }
  }

  selectRepo(index) {
    this.setState({selectedRepo: index});
  }

  loadRepos(lang){
    this.setState({status: 'loading', selectedRepo: null});

    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lang.toLowerCase()}&sort=stars&order=desc&type=Repositories`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        } 
      })
      .then(data => {
        this.setState({
          repos: data.items,
          status: 'done',
          selectedRepo: 0
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          status: 'error',
          errorMsg: error.message
        });
      });
  }

  render(){
    let componentStatus;
    switch(this.state.status) {
      case 'loading': {
        componentStatus = <Loading />;
        break;
      }
      case 'done': {
        componentStatus = <TopReposList selectedIndex={this.state.selectedRepo} selectRepo={this.selectRepo} repos={this.state.repos} />;
        break;
      }
      case 'error': {
        componentStatus = <LoadingError message={this.state.errorMsg} />;
        break;
      }
      default:
    }

    return (
      <React.Fragment>
        <div className='row'>
          <div className='col'>
            <h2>Top Repos - {this.props.selectedLanguage}</h2>
            {componentStatus}
          </div>
          <div className='col'>
            {this.state.status === 'error' ? componentStatus : <RepoDetails repo={this.state.repos[this.state.selectedRepo]} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopRepos;