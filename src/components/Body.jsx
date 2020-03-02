import React,{useState} from 'react';
import Button from './Button';

function Body(){

  const [number,setNumber] = useState(0);
  function increase(){
    setNumber(
      number + 1
    )
  }
  function makeZero(){
    setNumber(0);
  }
  function decrease(){
    setNumber(
      number -1
    )
  }
  return (
    <div>
    <div className="numberDiv">
    <span> {number} </span>
     </div>
     <center><Button
     simpleMath={increase}
     icon={"+"}
     color={"#baf1a1"}
      />
      <Button
       simpleMath={makeZero}
      icon={"reset"}
      color={"#ecce6d"}
       />
       <Button
        simpleMath={decrease}
       icon={"-"}
       color={"#c81912"}
        /> </center>

     </div>
  );
}

export default Body;
