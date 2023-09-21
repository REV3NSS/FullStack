import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 const course = 'Half Stack application development'
const App = () => {
 
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header/>
      <p>
        <Part1/>
      </p>
      <p>
        <Part2/>
      </p>
      <p>
        <Part3/>
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const Header = () => {
  return (
    <h1>{course}</h1>
  )
}

const Part1 = () => {
  return (
    {part1},{exercises1}
  )
}

const Part2 = () => {
  return (
    {part2},{exercises2}
  )
}

const Part3 = () => {
  return (
    {part3},{exercises3}
  )
}

export default App
