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
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <p>
        <Content type={course.parts[0].name} number={course.parts[0].exercises} />
      </p>
      <p>
        <Content type={course.parts[1].name} number={course.parts[1].exercises} />
      </p>
      <p>
        <Content type={course.parts[2].name} number={course.parts[1].exercises} />
      </p>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

const Header = (call) => {
  console.log(call)
  return (
    <div>
      <h1>{call.title}</h1>
    </div>
  )
}

const Content = (call) => {
  console.log(call)
  return (
    <div>
      <Part type={call.type} number={call.number} />
    </div>
  )

}

const Part = (call) => {
  console.log(call)
  return (
    <div>
      <p>{call.type} {call.number}</p>
    </div>
  )
}

const Total = (count) => {
  console.log(count)
  return (
    <div>
      <p>
        Number of exercises {count.total}
      </p>
    </div>
  )
}

export default App