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
          key={course.parts[i].name}
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course, i) => (
        <Course key={course.name} course={course} />
      ))}
    </div>
  )
}

export default App
