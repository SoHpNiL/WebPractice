//Lesson 2
// Most things here will have a copy of the code but in a more effecient manner with "fast" comment
const Hello = (props) => {
    // Decoupling - limit the times u call an object/instance (props) with variables holding info once instead
    const name = props.name
    const age = props.age

    //Fast
    const { name = "John Doe", age = "N/A" } = props
    /* creates a variable IF matches name with a variable in prop else becomes undefined 
    unless given a default value eg. John Doe */

    const bornYear = () => {
        const yearNow = new Date().getFullYear() // Buit in JS funcion that returns current date then rounds to year
        return yearNow - age
    }

    //Fast
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>

            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const App = () => {
    // despite the above having similar name they are in a different function and dont hold the same instance fields
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}