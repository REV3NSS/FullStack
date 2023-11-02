import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { render } from 'react-dom'

const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
const course = 'Half Stack application development'

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = () => {
  return (
    <div>
      <Part1 part={part1} exercises={exercises1} />
      <Part2 part={part2} exercises={exercises2} />
      <Part3 part={part3} exercises={exercises3} />
    </div>
  )
}

const Part1 = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Part2 = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Part3 = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

export default App
