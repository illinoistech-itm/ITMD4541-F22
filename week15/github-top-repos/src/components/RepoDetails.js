import React from "react";
import Loading from "./Loading";

function RepoDetails(props) {
  if (props.repo) {
    return (
      <React.Fragment>
      <h2>{props.repo.full_name}</h2>
      <p>Repo Name: {props.repo.name}</p>
      <p>Owner: {props.repo.owner.login}</p>
      <p>Stars: {props.repo.stargazers_count}</p>
      <p>Watchers: {props.repo.watchers_count}</p>
      <p>URL: <a href={props.repo.html_url}>{props.repo.html_url}</a></p>
      <p>Description: {props.repo.description}</p>
      </React.Fragment>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default RepoDetails;