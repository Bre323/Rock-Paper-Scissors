import { useState } from 'react';
import Game from './components/Game';
//import Modal from './components/Modal';
//import Overlay from './components/Overlay';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game />
    </>
  )
}

export default App
