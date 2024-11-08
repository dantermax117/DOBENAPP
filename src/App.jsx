/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Inicio from './layout/Inicio'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import Stock from './paginas/Stock'
import Insumos from './paginas/Insumos'


function App() {
  

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout/>} >
              <Route index element={<Login/>}/>
              <Route path="registrar" element={<Registrar/>}/>
            </Route>
            <Route path="/doben" element={<Inicio/>} >
              <Route index element={<Stock/>}/>
              <Route path="insumos" element={<Insumos/>}/>

            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
