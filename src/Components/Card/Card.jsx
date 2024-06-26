import React from 'react'
import '../Card/Card.css'


export const Card = ({FoodData,category,setCategory,searchItem,setSearchItem}) => {
   
  
  let filteredFoodList =  FoodData.filter((item)=>{
    return category==="All" ? item :item.category===category   
  })

  if(searchItem!="")
    {
      filteredFoodList = FoodData.filter((item)=>{
          return searchItem.toLowerCase()===item.title.toLowerCase()? item :""
        })
    }
  return (
    <>
        { filteredFoodList.map((item)=> (
          
        <div className="card" key={item.id}>
                <div className="food-container">
                   <div><img src={item.pic} alt='Food Image' className='food-image'/></div>   
                    <div className="desc">
                    <h2>{item.title}</h2>
                    <span>{item.desc}</span>
                    </div>
                </div>
                <div className="price"><span>{item.price}</span></div>
        </div> 
        ))}
    </>
  )
}
