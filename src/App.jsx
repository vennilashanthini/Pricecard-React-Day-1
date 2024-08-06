import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
    const type = ["FREE","PLUS","PRO"]
    const price = ["$0/month","$9/month","$49/month"]
    const users =["✔ Single User","✔ 5 Users","✔ 5 Users"]
    const pacage=["✔ 50GB Storage","✔ 50GB Storage","✔ 50GB Storage"]
    const three=["✔ Unlimited Public Projects","✔ Unlimited Public Projects","✔ Unlimited Public Projects"]
    const four=["✔ Community Access","✔ Community Access","✔ Community Access"]
    const five =["× Unlimited Private Projects","✔ Unlimited Private Projects","✔ Unlimited Private Projects"]
    const six=["× Dedicated Phone Support","✔ Dedicated Phone Support","✔ Dedicated Phone Support"] 
    const seven=["× Free Subdomain","✔ Free Subdomain","✔ Free Subdomain"]
    const eight=["× Monthly Status Report","× Monthly Status Report","✔ Monthly Status Report"]

  return (
    <div>
     <Card type0 ={type[0]} price0={price[0]} free0 = {users[0]} pack0 = {pacage[0]} three0={three[0]} four0={four[0]} five0={five[0]} six0={six[0]} seven0={seven[0]} eight0={eight[0]} type1 ={type[1]}  price1 = {price[1]} free1 = {users[1]} pack1 = {pacage[1]} three1={three[1]} four1={four[1]} five1={five[1]} six1={six[1]} seven1={seven[1]} eight1={eight[1]} type2 ={type[2]}  price2={price[2]} free2 = {users[2]} pack2 = {pacage[2]} three2={three[2]} four2={four[2]} five2={five[2]} six2={six[2]} seven2={seven[2]} eight2={eight[2]}/>
     
    </div>
  )
}

function Card({type0,price0,free0,pack0,three0,four0,five0,six0,seven0,eight0,type1,price1,free1,pack1,three1,four1,five1,six1,seven1,eight1,type2,price2,free2,pack2,three2,four2,five2,six2,seven2,eight2}){
  return(
    <div className='Card'>
      <div className='subcard-free'>
      <h5 className='Header'>{type0}</h5>
      <h1>{price0}</h1>
      <span> <hr/> </span>
      <h5>{free0}</h5>
      <h5>{pack0}</h5>
      <h5>{three0}</h5>
      <h5>{four0}</h5>
      <h5>{five0}</h5>
      <h5>{six0}</h5>
      <h5>{seven0}</h5>
      <h5>{eight0}</h5>
      <button className='free'>Button</button>
      </div>
      <div className='subcard-plus'>
      <h5 className='Header'>{type1}</h5>
      <h1>{price1}</h1>
      <span> <hr/> </span>
      <h5>{free1}</h5>
      <h5>{pack1}</h5>
      <h5>{three1}</h5>
      <h5>{four1}</h5>
      <h5>{five1}</h5>
      <h5>{six1}</h5>
      <h5>{seven1}</h5>
      <h5>{eight1}</h5>
      <button className='plus'>Button</button>
      </div>
      <div className='subcard-pro'>
      <h5 className='Header'>{type2}</h5>
      <h1>{price2}</h1>
      <span> <hr/> </span>
      <h5>{free2}</h5>
      <h5>{pack2}</h5>
      <h5>{three2}</h5>
      <h5>{four2}</h5>
      <h5>{five2}</h5>
      <h5>{six2}</h5>
      <h5>{seven2}</h5>
      <h5>{eight2}</h5>
      <button className='pro'>Button</button>
      </div>
      
    
    </div>

  )
}

export default App
