import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [quotes, setQuotes] = useState([])
const [randomNum, setRandomNumber] = useState(Number)
useEffect(() => {
  fetchQuotes()
},[])

function fetchQuotes() {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => setQuotes(data))
      .catch(e => console.log(e))
  }
function randomNumber() {
  const random = Math.floor(Math.random() * quotes.length)
  setRandomNumber(random)
}

return (
    <div id='quote-box'>
        <span id='text'>{quotes[randomNum].text}</span>
        <span id='author'>{quotes[randomNum].author}</span>
        <a id='tweet-quote' href="twitter.com/intent/tweet" target='_blank'><i className='fa fa-twitter'></i></a>
        <button id='new-quote' onClick={randomNumber} >New Quote</button>
    </div>
  )
}

export default App
