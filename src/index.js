import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import Top from "./Comp/Top";
import Mid from "./Comp/Mid"
import Bot from "./Comp/Bot"

function Card(){
  return(

    <div className='Card'>

      
      <Top></Top>
      <Mid></Mid>
      <Bot></Bot>

    </div>
  
  )
}


ReactDOM.render(
<Card></Card>
  ,
  document.getElementById("root")
)


