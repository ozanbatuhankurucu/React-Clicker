import React from 'react';


function Button(props){
  var buttonStyles = {
    backgroundColor:props.color,
    fontSize:"22px"
  }
  return <div className="buttonDiv" style={buttonStyles} onClick={ () =>{
    props.simpleMath();
  }}>{props.icon}</div>;
}

export default Button;
