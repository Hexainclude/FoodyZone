
import './App.css'
import { Container } from './Components/Container/Container'
import { Header } from './Components/Header/Header'
import { useState } from 'react'

function App() {
 
  const [category,setCategory]=useState("All")
  const [searchItem,setSearchItem] = useState("")

  return (
   <div className='main-contenar'>
     <Header category={category} setCategory={setCategory} searchItem={searchItem} setSearchItem={setSearchItem}/>
     <Container category={category} setCategory={setCategory} searchItem={searchItem} setSearchItem={setSearchItem}/>
   </div>
  )
}

export default App
