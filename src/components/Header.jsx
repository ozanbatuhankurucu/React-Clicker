import React from 'react';

function Header(){
var img = <img src={ require('../images/star.png') } alt="star" />;
  return (
    <header> <p> {img} React Clicker {img}</p></header>

  );
}
export default Header;
