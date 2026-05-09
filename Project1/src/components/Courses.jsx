const course = ({ course }) => {
  const { name } = course
  const total = course.parts.reduce((total, parts) =>  total + parts.exercises, 0)
  console.log("the total is", total)

    return(
      <div>
        <h1> {name} </h1>
        <div>
          {course.parts.map(parts => <EX key={parts.id} parts={parts} />)}
        </div>
        <div>
          <br />
          <b>total of {total} exercises</b>
        </div>
      </div>

    )
}

const EX = ({ parts }) => {
  console.log("recieved", parts)
  return (
    <div>    <br />
      {parts.name} {parts.exercises}</div>

  )
}
export default course