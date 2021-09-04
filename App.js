import React, {useState} from 'react'
import './App.css'
function App(props) {
  const [value,setvalue] = useState(props.value)
  const [cztaktywny, setczyaktywny] = useState(true)
  return (
    <div>
      <p>Wartość licznika: {value}</p>
      <button onClick={() => { 
        setvalue( value + 1 )
        value > -1 ? setczyaktywny(false) : setczyaktywny(true)
        }}>Dodaj 1</button>
        
      <button disabled={cztaktywny} onClick={() => { 
        value < 2 ? setczyaktywny(true) : setczyaktywny(false)
        setvalue( value - 1)
        }} >Odejmij 1</button>
        <button onClick={() => {
          props.onDelete(props.id)
          }}>Usuń</button>
    </div>
  )
}

export default App
