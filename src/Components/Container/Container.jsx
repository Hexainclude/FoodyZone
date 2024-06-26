import React from 'react'
import '../Container/Container.css'
import { Card } from '../Card/Card'
import FoodData from '../../assets/FoodData.json'

export const Container = ({category,setCategory,searchItem, setSearchItem}) => {
  return (
    <div className='Container'>
        <div className="cards">
          <Card FoodData={FoodData} category={category} setCategory={setCategory} searchItem={searchItem}  setSearchItem={setSearchItem}/>
        </div>
    </div>
  )
}
