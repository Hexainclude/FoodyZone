import React, { useState } from 'react'
import '../Header/Header.css'


export const Header = ({category, setCategory,searchItem, setSearchItem}) => {


  function searchFood(e){
    searchItem = e.target.value
    setSearchItem(searchItem)
}

  return (
    <div className='header-container'>
        <div className='logo-container'> 
            <div className='logo'>
                <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
            </div>
            <div className="search-container"> 
                <input type='text' placeholder='Search Food...' onChange={searchFood}/>
            </div>
        </div>  
        <div className="navlinks">
          <button onClick={()=>setCategory("All")} className={category==="All"? "active":""} >All</button>
          <button onClick={()=>setCategory("Breakfast")} className={category==="Breakfast"? "active":""}>Breakfast</button>
          <button onClick={()=>setCategory("Lunch")} className={category==="Lunch"? "active":""}>Lunch</button>
          <button onClick={()=>setCategory("Dinner")} className={category==="Dinner"? "active":""}>Dinner</button>
        </div>
    </div>
  )
}
