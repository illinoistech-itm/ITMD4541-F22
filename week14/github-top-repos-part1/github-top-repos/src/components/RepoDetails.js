import React from "react";

function RepoDetails(props) {
  if (props.repo) {
    return (
      <h2>{props.repo.full_name}</h2>
    );
  } else {
    return (
      <h2>No Selected Repo</h2>
    );
  }
}

export default RepoDetails;