const x = 1 // X will remain as 1 and not change
x = 4 // causes an error

let y = 3 // y can freely change
y = 'hi' // y now prints as hi
const z = [1, 2, 3]
z(1) = [2] // const arrays can update indexes, not change away from array

  /* Arrays */
  .concat // creates a new array, while adding to the end
  .push // adds value to the end of an existing array
  .map // creates a new array, updating all elements within

/* Objects */

// requires curly brackets to form, 
// then referred properties with colon, no need to init
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

//The values in an object are called or created by using the "dot" notation 
// followed by the property name eg object1.NAME, or by using brackets:
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed


// Methods

const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const sumthis = sum(2, 3)
console.log(sumthis) // This is how we call functions, AKA the SAME THING bruh


// Effeciencies or Workarounds
const double = p1 => { //round brackets for only when theres multiple inputs
  return p1 * 2
}

const Edouble = p1 => p1 * 2 // skip the body if theres no further code and just a single computation

const Sdouble = (p1) => { // this is the SLOW way to write
  return p1 * 2
}

const Tarray = [1,2,3]
const Narray = Tarray.map(p => p*2) 
// p is any named input, map function feeds its inputs it recieves from Tarray into this quick function we made, resulting in Narray being:
// Narray = [1,4,6] *double*
