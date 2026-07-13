import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="mt-8 p-4 bg-purple-100  border border-purple-300  max-w-md mx-auto">
          <p className="text-red-800 font-light text-sm">
            Tailwind CSS v4 is successfully configured! 🎉
          </p>
        </div>
    </>
  )
}

export default App
