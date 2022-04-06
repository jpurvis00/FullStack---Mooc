//Displays the header.  We use props as the passed in parameter.  This can be one parameter or multiple.
//We need to use the id that is assigned in the function code to access the values.
//ex. Header function is called in the App definition with the id course.  To access that, we use the following
//notation: props.course
const Header = (props) => {
  console.log("Header:", props)
    return <h1>{props.course.name}</h1>
}

//Displays the content of the page.  We use props as the passed in parameter. We are passing 1 array to the function. 
//We need to use the id that is assigned in the function code to access the values.
//ex. Content function is called in the App definition with the id of parts.  To access that, we use the following
//notation: props.parts[*].name and props.parts[*].exercises
const Content = (props) => {
  console.log('Content:', props.course.parts)
  return ( 
    <div>
      {/* Call the Part function and pass the name of the course and the number of exercises for the course */}
      {/* <Part name={props.part1.name} exercises={props.part1.exercises} />
        <Part name={props.part2.name} exercises={props.part2.exercises} />
        <Part name={props.part3.name} exercises={props.part3.exercises} /> */}

      {/* For this assignment, we know there are 3 elements in the array.  Best practice would be to iterate through the array
          using the array length or a forEach loop.  The assignment says to skip best practice for now and just code for 3 values. */}
      {/* <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises} /> */}
      
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}

//Displays the name of the course followed by the number of exercises for the course.
const Part = (props) => {
  console.log('Part:', props.name, props.exercises)
  return (
    <p>{props.name}: {props.exercises} exercises</p>
  )
}

//Displays the total number of exercises from all courses.
const Total = (props) => {
  console.log('Total:', props.course.parts)
  return(
    <div>
        <p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p> 
    </div>
  )
}

const App = () => {
  //We will now combine the course and all the parts into 1 object instead of 1 const and 1 array and make changes to 
  //our functions so that the page still renders
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
      }
    ]
  }

  return (
    <div>
       {/* Call the Header function.  We have defined in the header function the var course.  We pass the course const to the function as the var course.  */}
      <Header course={course} />
       
      {/* Call the Content function.  We have changed the definition of part* from 3 separate object to one array.  */}
      {/* This is the old call for 3 sep objects.  New call is below for passing just the array.
        <Content part1={part1} part2={part2} part3={part3} /> */}
      {/*<Content parts={parts} /> */}
      
      {/* New call passing just the object that contains the course name and the parts array stored in the object */}
      <Content course={course} />
       
      {/* Call the Total function.  We have changed the definition of part* from 3 separate object to one array.  */}
      {/* This is the old call for 3 sep objects.  New call is below for passing just the array.
        <Total part1={part1} part2={part2} part3={part3} /> */}
      
      {/* New call passing just the object that contains the course name and the parts array stored in the object */}
      <Total course={course} />
    </div>
  )
}

export default App;
