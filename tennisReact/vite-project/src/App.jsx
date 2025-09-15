import './App.css'
import {nanoid} from "nanoid"
import Die from './diecomponent.jsx'
import { useState } from 'react';
import Confetti from 'react-confetti'
export default function App() {
  const [dice,setDice]=useState(generate())
  function generate(){
     const vector=  new Array(10)
     .fill(0)
     .map(()=> ({
      value: Math.ceil(Math.random()*6),
      isHeld : false,
      id : nanoid()
     }))
     return vector 
  }
  function change(){
    if(!gameWon){
  setDice(oldi=>oldi.map(per=>
    per.isHeld ? 
    per :
    {...per,value: Math.ceil(Math.random()*6)}
  
  ))
}else {
  setDice(generate())
}
  }
   function hold(id){
   setDice(oldDice=>{
    return oldDice.map(di=>{
    return di.id===id ?
    {...di,isHeld:!di.isHeld}:
    di
    } )})


   }  

   const gameWon=dice.every(die => die.isHeld) &&
  dice.every(die => die.value === dice[0].value)


  const ranelem= dice.map(obj=>
  <Die
     value={obj.value} 
     isHeld={obj.isHeld} 
     key= {obj.id}  
      hold={()=>hold(obj.id)}/> )
  return (
     <main className='first'>
      <h1 className='title'> Tenzies</h1>
      <p className='instructions'> Roll until all dice are the same,Click each die to freeze 
        it at its current value between rolls
      </p>
       <div className='but'>
       {ranelem}

       </div>
      <div>
       <button className='secbut' onClick={change}> {gameWon ? "newGame":"ROll"}</button>


      </div>
     </main>
  )
}
