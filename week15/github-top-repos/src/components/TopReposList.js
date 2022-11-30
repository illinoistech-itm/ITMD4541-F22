import React from "react";
import './TopReposList.css';

export default function TopReposList(props) {
    return (
      <ul className="list-group">
      {props.repos.map( (repo, index) => {
        if (props.selectedIndex === index) {
          return <li onClick={() => props.selectRepo(index)} key={repo.id} className="list-group-item active">{repo.full_name}</li>;
        } else {
          return <li onClick={() => props.selectRepo(index)} key={repo.id} className="list-group-item">{repo.full_name}</li>;
        }  
      })}
    </ul>
    );
}