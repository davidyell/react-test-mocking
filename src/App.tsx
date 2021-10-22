import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import FetchCard from './Card/FetchCard'
import {ICard} from './Card/ICard'

function App() {
  const [card, setCard] = useState<ICard>()

  useEffect(() => {
    FetchCard().then(result => setCard(result))
  }, [card])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        {card && (
            <section>
                <h1>{card.name}</h1>
                <img src={card.imageUrl} alt={card.name}/>
            </section>
        )}
    </div>
  )
}

export default App
