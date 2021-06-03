// primitive types

const str = "str"
const num: number = 12
const obj = {
  name: "sam",
  age: 29,
  subjects: ["english"]
}

interface ObjProps {
  name: string
  age: number,
  //add readonly
  subjects:  string[]
}
//impure function
const mutateObj = (obj: ObjProps) => {
  obj.subjects[0] = "math"
}

// pure function 
const copyObj = (obj: ObjProps) => {
  // copy
  const copiedSubjects = [...obj.subjects] 
  copiedSubjects[0] = "math"
  return {
    ...obj,
    subjects: copiedSubjects
  }

}

copyObj(obj)

console.log(obj)

const state = {
  name: ""
}
const action = {type: "A", payload: "sam"}

// const reducer = (state, action) => {
//   switch(action.type){
//     case "A":
//       state.name = action.payload
//       return {
//         ...state,
//         name: action.payload,
//         array: [...state.array, "s"]
//       }
//   }
// }





//collections
// object
const hashmap = {
  "name": "sam"
}

const array: string[] = ["1", "2"]

// client side rendering


// 2020 dynamic import 
// react single page application index.js, inde.xhtml
// webpack, typescript index.js => 200 components 
// javascript api history 
// index.js => chunk1.js, chunk2.js, chunk3.js 



//2018 => better use experience first load is super fast 
// server-side rendering next.js
// node.js => static folder index.html, contactus.html  



//redux middlewares
//thunk - 
// saga 
// redux-observable  
/// switchMap()

// 1 => ready to fire send post 
// 2 => cancel => fire again 
/// there will be only one post request 


// react query 



//pure function

//for loop



//functional programing

const names = ["sam", "sam1", "sam2"]
// pure function 
const results = names.map(value => `${value}!`).filter(value => value !== "sam!")

//reduce 

const results2 = names.reduce<string[]>((acc, value) => {

  acc.push(`${value}!`)

  return acc;

},[])


console.log(results2)


const pipe = (...fns: any[]) => (value: any) => fns.reduce((acc, fn) => fn(acc), value)


const upperCase = (value: string) => value.toUpperCase()
const add = (value: string) => `${value} .`

const upperCaseAddPeriod = (value: string) => pipe(
  add,
  upperCase
)(value)

console.log(upperCaseAddPeriod("sam"))





// abstract class

abstract class CustomError extends Error {
  abstract statusCode: number
  constructor(m: string) {
      super(m);

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract showMessage(): string
}


class InternalError extends CustomError {
  statusCode = 400

  showMessage(): string {
    return `statusCode: ${this.statusCode} ${this.message}`
  }
}

class ExampleError extends CustomError {
  statusCode = 500

  showMessage(): string {
    return `statusCode: ${this.statusCode} ${this.message}`
  }
}

try{

}
catch(err: unknown) {
  if(err instanceof CustomError){
    err.showMessage()
    //
  }
  else{

  }
}




//type interface
interface HomePageProps {
  name: string
  path: string
  subjects: readonly string[]
}




//implement , inheritance

//interface

//asserts

interface Post {
  name: string
  id: string
  title: string
}
//checking types 
const isDataPost = (data: any): data is Post => {
  return "name" in data && "id" in data && "title" in data
}

//assert 

// assert("")

fetch("placeholder.json/posts")
.then((data: unknown) => {
  if(!isDataPost(data)){
    throw new Error("it is not a post")
  }
})



//generics

//promise

const fs = require("fs")
// usr/sam/nodejs/hello.txt

console.log("first")



const readFilePromise = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname + "hello.txt"), (error, content) => {
      if(error){
        reject(error)
      }
      resolve(content)
    })
  })
}

readFilePromise()
.then(data => {

})
.catch(err => {

})

async function random(){
  return []
}

/// ripple => senior frontend  
try{

  const response =   random() //
  const response2 =  random() // 

  // 10  

  const rseult1 = await response 
  const result2 = await response2
  // 3 seconds
  // =========

  const result1 =   await random() // 3 
  // 
  const result2 =  await random() //3

  //6

}
catch(err){
  err
}

//async await

//spread operator

const initialObj ={
  name: "sam",
  age:29
}

const obj = {
  ...initialObj,
  subjects: ["math"]
}

//default value

//unkown vs any

type Sam = number | string | boolean


// create custom error classes

//redux types => kind

//singleton






// kotlin , swift , typescript
class DatabaseWrapper {
  private static instance?: DatabaseWrapper 
  private constructor(){
    //
    mongoDB.connect()
  }

  public static getInstance(): DatabaseWrapper {
    if(!DatabaseWrapper.instance) {
      DatabaseWrapper.instance = new DatabaseWrapper()
    }
    return DatabaseWrapper.instance
  }
}

DatabaseWrapper.getInstance() 








//enum

enum Input {
  Email = "email",
  Password = "password"
}

const Form = () => {

  const onChange = (e) => {
    if(e.target.name === Input.Email) {

    }
    else if(e.target.name === Input.Password){
      
    }
  }

  return (
    <div>
      <input onChange={onChange} name={Input.Email}/>

      <input onChange={onChange} name={Input.Password}/>
    <div>
  )
}

//build redux

