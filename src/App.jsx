import { useState } from 'react'
import './App.css'
import quotes from'./quotes.json'
import Quo from './components/Quotes.jsx'

const colorsArray = ['#440261', '#110261','#025161','#610234','#026124' ]

function App() {
  const nRandom = end => {
 return Math.floor(Math.random()*end.length)
 }
 const getAleatoryThing = end => {
  const x = nRandom(end)
  return end[x]
}

/*let aleatoryQuotes = nRandom(quotes)
let aleatoryColors = nRandom(colorsArray)*/

const [quoteRandom, setQuoteRandom] = useState(getAleatoryThing(quotes))
const [colorsRandom, setColorsRandom] = useState(getAleatoryThing(colorsArray))

nRandom(quotes)
 
  const styleApp={
    backgroundColor:colorsRandom
  }
  const click =()=>{
  setQuoteRandom(getAleatoryThing(quotes))
  setColorsRandom(getAleatoryThing(colorsArray))
  }
  
    return (
    <div style={styleApp} className="App">

      <Quo
      quoRandom = {quoteRandom}
      colRandom = {colorsRandom}
      click = {click}
      getAleatoryThing = {getAleatoryThing}
      quotes={quotes}
      colorsArray={colorsArray}
      />
      
    </div>
  )
}

export default App
