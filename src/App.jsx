import { useState } from 'react'
import { Home } from './Pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
