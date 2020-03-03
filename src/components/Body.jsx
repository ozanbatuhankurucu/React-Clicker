import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import SyncIcon from '@material-ui/icons/Sync';
import RemoveIcon from '@material-ui/icons/Remove';
function Body(){

  const [number,setNumber] = useState(0);

  const clickButtonStyles = {
    marginTop:"25px"
  }

  function increase(){
    setNumber(
      number + 1
    )
  }
  function reset(){
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
    <p> {number} </p>
     </div>

<center>

<div className="buttonDiv" style={ {backgroundColor:"#21bf73",color:"white"} }onClick={()=> {
increase();
}}>
<AddIcon style={clickButtonStyles} />
 </div>
 <div className="buttonDiv" style={ {backgroundColor:"#feb72b",color:"black"} }onClick={()=> {
 reset();
 }}>
 <SyncIcon style={clickButtonStyles} />
  </div>
  <div className="buttonDiv" style={ {backgroundColor:"#fd5e53",color:"white"} }onClick={()=> {
  decrease();
  }}>
  <RemoveIcon style={clickButtonStyles} />
   </div>
</center>

     </div>
  );
}

export default Body;
