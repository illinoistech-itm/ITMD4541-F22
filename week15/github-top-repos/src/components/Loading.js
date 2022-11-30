import React from "react";
import loadingimg from './loading.gif';

function Loading(props) {
  return (
    <div style={{textAlign: 'center'}}>
    <img src={loadingimg} alt="Loading..."/>
    </div>
  );
}

export default Loading;