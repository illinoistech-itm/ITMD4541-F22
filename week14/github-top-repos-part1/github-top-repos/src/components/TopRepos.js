import React from "react";
import Loading from "./Loading";
import RepoDetails from "./RepoDetails";
import TopReposList from "./TopReposList";

class TopRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      status: ''
    };
    this.loadRepos = this.loadRepos.bind(this);
  }

  componentDidMount(){
    this.loadRepos(this.props.selectedLanguage);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.selectedLanguage !== prevProps.selectedLanguage) {
      this.loadRepos(this.props.selectedLanguage);
    }
  }

  loadRepos(lang){
    this.setState({status: 'loading'});

    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lang.toLowerCase()}&sort=stars&order=desc&type=Repositories`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          repos: data.items,
          status: 'done',
          selectedRepo: null
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
        componentStatus = <TopReposList repos={this.state.repos} />;
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
            <RepoDetails repo={this.state.repos[0]} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopRepos;