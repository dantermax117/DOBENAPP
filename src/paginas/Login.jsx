import { useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import registrar from "./Registrar"


const Login = () => {
  return (
    <>
    <h2>Login </h2>
    {registrar()}
    </>
  )
}

export default Login
