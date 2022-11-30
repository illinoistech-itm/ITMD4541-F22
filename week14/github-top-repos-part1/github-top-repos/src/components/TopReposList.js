import React from "react";

export default function TopReposList(props) {
    return (
      <ul className="list-group">
      {props.repos.map( repo => {
        return <li key={repo.id} className="list-group-item">{repo.name}</li>;
      })}
    </ul>
    );
}