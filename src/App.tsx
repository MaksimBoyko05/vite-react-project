import React, { useState } from 'react'
import './App.css'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>Лічильник: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Натисни мене!
      </button>
    </div>
  )
}

export default App