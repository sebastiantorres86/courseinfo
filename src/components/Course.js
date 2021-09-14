import React from 'react'

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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
export default Course
