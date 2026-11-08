import React from 'react'
import ChildA from './ChildA'
import './App.css'

function App() {
  let uid = "Prashun"
  let pwd = "Me@123"

  return (
    <>
        <h1>Hello This Is App Component</h1>
        <ChildA user = {uid} password = {pwd}></ChildA>
    </>
  )
}

export default App
