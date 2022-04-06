//Displays the header.  We use props as the passed in parameter.  This can be one parameter or multiple.
//We need to use the id that is assigned in the function code to access the values.
//ex. Header function is called in the App definition with the id course.  To access that, we use the following
//notation: props.course
const Header = (props) => {
  console.log("Header", props)
  return <h1>{props.course}</h1>
}

//Displays the content of the page.  We use props as the passed in parameter. We are passing 3 objects to the function. 
//We need to use the id that is assigned in the function code to access the values.
//ex. Content function is called in the App definition with the ids of part*.  To access that, we use the following
//notation: props.part1.name and props.part1.exercises
const Content = (props) => {
  console.log('Content', props)
  return ( 
    <div>
      {/* Call the Part function and pass the name of the course and the number of exercises for the course */}
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

//Displays the total number of exercises from all courses.
const Total = (props) => {
  console.log('Total', props)
  return(
    <div>
        <p>Number of exercises: {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </div>
  )
}

//Displays the name of the course followed by the number of exercises for the course.
const Part = (props) => {
  console.log('Part', props)
  return (
    <p>{props.name}: {props.exercises} exercises</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  //Creation of 3 objects
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
       {/* Call the Header function.  We have defined in the header function the var course.  We pass the course const to the function as the var course.  */}
      <Header course={course} />
       
       {/* Call the Content function.  We pass the part objects to the function as the var part*.  */}
      <Content part1={part1} part2={part2} part3={part3} />
       
       {/* Call the Total function.  We pass the part objects to the function as the var part*.  */}
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App;
