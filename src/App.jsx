import { useState } from 'react'
import  "./App.css"

function App() {

  const [animalName, setAnimalName] = useState("")

  //se utente digita stringa cane fai comparire testo in rosso che dira: e un animale
  const [isCane, setIsCane] = useState(false)

const handleInput = (event) => {
  setAnimalName(event.target.value)
  if(event.target.value.includes("cane")){
    setIsCane(true)
  } else {
    setIsCane(false)
  }
}  

const reset = () => {
  setAnimalName("");
}

  return (
    <>
    <div className='container'>  
        <label htmlFor="animal">Insert an animal</label>
        <input 
        type="text" 
        value={animalName}
        onChange={handleInput}/>
        <button onClick={reset}>Cancel</button>
    </div>

    <p>{animalName}</p>
      {isCane && <p className='red'>e un animale</p>}
   
    </>
  )
}

export default App
