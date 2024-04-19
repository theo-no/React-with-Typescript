import React,{ useState } from 'react'
import './App.css'
import Store from './Store'
import { Address, Restaurant } from './model/restaurant'
import BestMenu from './BestMenu'
import Box from './Box'

let data:Restaurant = {
  name: 'test restaurant',
  category: 'western',
  address: {
    city: 'Seoul',
    detail: 'somewhere',
    zipCode: '45454654'
  },
  menu: [{name:"rose pasta",price:18000,category:"PASTA"}, {name:"galic-steak",price:29000,category:"STEAK"}, {name:"taco salad",price:13000,category:"SALAD"}]
}

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress = (address:Address) =>{
    setMyRestaurant({...myRestaurant,address:address})
  }
  const showBestMenuName=(name:string)=>{
    return name
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="피자" price={1000} showBestMenuName={showBestMenuName}/>
      <Box name="box1" num="1"/>
      <Box name="box2" num="2"/>
    </div>
  )
}

export default App
