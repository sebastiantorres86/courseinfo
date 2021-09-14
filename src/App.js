import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, i) => (
        <Part
          part={course.parts[i].name}
          exercises={course.parts[i].exercises}
        />
      ))}
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return <Course course={course} />
}

export default App
