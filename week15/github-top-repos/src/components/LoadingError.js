import React from "react";

function LoadingError(props){
  return (
    <div style={{textAlign: 'center'}}>
      <p>Something went wrong loading data...</p>
      <p>Please try again.</p>
      <p>Error Message: {props.message}</p>
    </div>
  );
}

export default LoadingError;