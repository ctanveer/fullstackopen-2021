import React from 'react';


const Header = ({ course }) => {
    return (
      <h2 key={course.id}>{course.name}</h2>
    )
}
  
const Total = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
      <p>Number of exercises {totalExercises}</p>
    ) 
}
  
const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>    
    )
}
  
const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part}/>  
        )}
      </div>
    )
}
  
const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

export default Course;
