import React, {useState} from 'react';
import {Select,MenuItem} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

const App=()=> {
const [num,setNum]=useState()
const [newitem,setNewItem]=useState([])
const [total,setTotal]=useState()

 const itemEvent=(event)=>{
  
    setNum(event.target.value)
  
    
     console.log(event.target.value) //5
 }


const listOfNum=(event)=>{
  // if(num==="")
  // {
  //   alert("ADD something")
  // }

if(newitem.length < 2 && num > 0)
{
   

   setNewItem((preValue)=>{
     console.log('set new item')
//setNewItem(prevValue=>prevValue+num)
    return [...preValue,num];
     
    
   })
  }

  // setNewItem({
  //   ...num,
  //   [event.target.name]:parseInt(event.target.value)+1
  // })
 // console.log(preValue)
  console.log(num, 'number') //5
 setNum("")
}
const getSum = () =>  {
 // let totalSum = 0;
  //console.log(newitem, 'newItem');
  // newitem.forEach(item => {
  //  totalSum += +item;
  setTotal ((+newitem[0]) + (+newitem[1]))
  //});
 // console.log(totalSum, 'total');
 // return totalSum;
};

const getSubtract=()=>{
  setTotal ((+newitem[0]) - (+newitem[1]))
}
const getMultiply=()=>{
  setTotal ((+newitem[0]) * (+newitem[1]))
}
const getDivide=()=>{
  setTotal ((+newitem[0]) / (+newitem[1]))
}

const destroyEvent=(event)=>{
  setNewItem([]) 
  setTotal("")
}

return (
  <>
  <div className="header">
  <h1 className="title">EXPRESSION EVALUATOR</h1>
   <input
            className="inputField1"
          id="outlined-basic" label="Enter a number" variant="outlined" 
           type="number"
         
          placeholder="Enter a number" 
          onChange={itemEvent}
          value={num}
          
         // onChange={e=> setNum(+e.target.value)}
  
   />
   <button className="btnAdd" 
           onClick={listOfNum} >
             ADD NUMBER
   </button>

   <button className="btnAdd" onClick={destroyEvent}>RESET BUTTON</button>

   <ol>
      { newitem.map((val)=>{
             return  <li> {val}</li> 
           
        })
      }
    </ol>
    
   <Select className="menu">
          <MenuItem onClick={getSum}>+</MenuItem>
          <MenuItem onClick={getSubtract}>-</MenuItem>
          <MenuItem onClick={getMultiply}>*</MenuItem>   
          <MenuItem onClick={getDivide}>/</MenuItem>       
        </Select>

        <h3 className="sum">TOTAL:{total}</h3> 
  </div>
  </>
);
}
export default App;
