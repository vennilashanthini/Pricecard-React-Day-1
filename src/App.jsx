import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='App'> 
    <Card 
    pack="Free"
    price="&#36;0"
    periods="/month"
    
    user ="✔ Single User"
    storage ="✔ 50GB Storage"
    publicProjects ="✔ Unlimited Public Projests"
    access = "✔ Community Access"
    private = "× Unlimited Private Projects"
    support = "× Dedicated Phone Support"
    subDomain="× Free Subdomain"
    report="× Monthly Status Report"/>


     <Card 
     pack="PLUS"
     price="&#36;9"
     periods="/month"
     
     user ="✔ Unlimited Users"
     storage ="✔ 50GB Storage"
     publicProjects ="✔ Unlimited Public Projests"
     access = "✔ Community Access"
     private = "✔ Unlimited Private Projects"
     support = "✔ Dedicated Phone Support"
     subDomain="✔ Unlimited Free Subdomain"
     report="× Monthly Status Report"/>


     <Card 
     pack="PRO"
     price="&#36;49"
     periods="/month"
     
     user ="✔ Unlimited Users"
     storage ="✔ 50GB Storage"
     publicProjects ="✔ Unlimited Public Projests"
     access = "✔ Community Access"
     private = "✔ Unlimited Private Projects"
     support = "✔ Dedicated Phone Support"
     subDomain="✔ Unlimited Free Subdomain"
     report="✔ Monthly Status Report"/>
    </div>
     
   
  )
}




export default App

function Card(props){
  return(
   <div className='card'>
    <p class="pack">{props.pack}</p>
      <h1>
        {props.price}
        <span class="periods">{props.periods}</span>
      </h1>
      <hr></hr>
      <p class="para">
         {props.user}
      </p>
      <p class="para">
         {props.storage}
      </p>
      <p class="para">
         {props.publicProjects}
      </p>
      <p class="para">
         {props.access}
      </p>
      <p class="para">
         {props.private}
      </p>
      <p class="para">
         {props.support}
      </p>
      <p class="para">
         {props.subDomain}
      </p>
      <p class="para">
         {props.report}
      </p>
      <button>BUTTON</button>
   </div>
  )
}
