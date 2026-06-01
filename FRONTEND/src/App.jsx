
import {Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import Navbar from "./components/Navbar"
import Mines from "./components/Mines"
import Profile from "./components/Profile"

function App(){
  return (
    <>
    <Navbar name="Abhay" amount={100}/>
  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mines' element={< Mines/>} />
      <Route path='/profile' element={< Profile/>} />
    </Routes>
    </>
  )
}


export default App