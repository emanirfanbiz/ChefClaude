import Header from './components/header'
import Main from './components/main2'
// // import Joke from './components/joke'
// // import jokesData from './components/jokesData'
// // export default function App(){
// //   const jokeElements = jokesData.map((joke)=> {
// //     return <Joke setup = {joke.setup} 
// //     punchline = {joke.punchline}/>
// //   })
// //   return(
// //     <main>
// //       {jokeElements}
// //     </main>
// //   )
// // }
export default function App(){
  return (
  <>
  
  <Header/>
  <Main/>
  </>
  ) 
}

//Practicing States in react 
//import React from "react"
//export default function App(){
  // const [result,setResult] = React.useState('Yes')

  // function handleClick(){
  //   return (
  //     setResult('Definitely')
  //   )
  // }

  // return (
  //   <main>
  //   <h1 className='title'> Is state important to know </h1>
  //   <button className='value' onClick={handleClick}> {result}</button>
    
  //   </main>
  // )

//   let [count, setCount] = React.useState(0)

//   function addCount (){
  
//       setCount(prevCount => prevCount+1)
    
//   }

//   function subCount(){
    
//       setCount(prevCount => prevCount -1)
    
//   }

//   return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" aria-label="Decrease count" onClick={subCount}>–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" aria-label="Increase count" onClick={addCount}>+</button>
//             </div>
//         </main>
//     )
 
// }

//Now practicing part 16 which is toggling state

// export default function App(){
//   const isSleeping = false;
//   let [display , setDisplay] = React.useState('Yes')
//   function isFlip(){
//     const final = isSleeping ? false : true
//     setDisplay(isSleeping ? 'yes' : 'No')
//   }
//   return (
//     <main>
//       <h1 className="title"> DO I feel like sleeping?</h1>
//       <button onClick={isFlip}>
//         {display}
//       </button>
//     </main>
//   )
// }
//updating complex arrays
// export default function App() {  
//   const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
//   "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
//   const [myFavoriteThings,setMyFavouriteThings] = React.useState([])
//   const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

//   function addFavoriteThing() {
//     setMyFavouriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]])
//   }
  
//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">
//         {thingsElements}
//       </section>
//     </main>
//   )
// }

//  Complex object state 
// import React from "react"
// import avatar from "./images/user.png"
// import starFilled from "./images/star-filled.png"
// import starEmpty from "./images/star-empty.png"
// import Star from "./components/Star"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })

   
    

//     function toggleFavorite() {
//         setContact(prevContact => {
//          return {
//           ...prevContact,
//           isFavorite : !prevContact.isFavorite
//          }
          
          

//         })
//     }

//     return (
//       <main>
//         <article className="card">
//                 <img
//                     src={avatar}
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">
//                     <Star isFilled = {contact.isFavorite} handleClick = {toggleFavorite}/>
//                     <h2 className="name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="contact">{contact.phone}</p>
//                     <p className="contact">{contact.email}</p>
//                 </div>

//             </article>
//             </main>
        
//     )
// }

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// /**
//  * Challenge: add another label and input for the password field
//  */

// export default function App() {

//     // function handleSubmit(event){
//     //     event.preventDefault()
//     //     const formEl = event.currentTarget
//     //     const formData = new FormData(formEl)
//     //     const email = formData.get("email")
//     //     formEl.reset()
//     // }
//     //easyway of doing the above

//     function signUp(formData)
//     {
//         const email = formData.get('email')
//         const password = formData.get('password')
        
//     }
//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
//         <br />
        
//         <label htmlFor="password">Password:</label>
//         <input id="password" type="password" name="password" />
//         <br />
        
//         <button>Submit</button>
        
//       </form>
//     </section>
//   )
// }

// import React from 'react';
// import ReactDOM from 'react-dom/client';

//  export default function App() {
//   /**
//    * Challenge: grab the employment status from the form and log it
//    * to the console. (Remember to select one of the radios before submitting)
//    * 
//    * Note: This won't work the way you might expect quite yet!
//    */

//   function signUp(formData) {
//     // const email = formData.get("email")
//     // const password = formData.get("password")
//     // const employmentStatus = formData.get("employmentStatus")
//     // const dietaryRestrictions = formData.getAll("dietaryRestrictions")
//     // const favColor = formData.get('favColor')
    
//     const data = Object.fromEntries(formData)
//     const dietaryData = formData.getAll('dietaryRestrictions')
//     const allData = {
//       ...data,
//       dietaryRestrictions
//     }
//   }

//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>

//         <label htmlFor="email">Email:</label>
//         <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

//         <label htmlFor="password">Password:</label>
//         <input id="password" defaultValue="password123" type="password" name="password" />

//         <label htmlFor="description">Description:</label>
//         <textarea id="description" name="description" defaultValue="This is a description"></textarea>

//         <fieldset>
//           <legend>Employment Status:</legend>
//           <label>
//             <input type="radio" name="employmentStatus" value="unemployed" />
//             Unemployed
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" value="part-time" />
//             Part-time
//         </label>
//           <label>
//             <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
//             Full-time
//         </label>
//         </fieldset>

//         <fieldset>
//           <legend>Dietary restrictions:</legend>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="kosher" />
//             Kosher
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="vegan" />
//             Vegan
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
//             Gluten-free
//         </label>
//         </fieldset>
//         <br />
//         <label htmlFor="favColor">
//           What is your Favourite color?

//         </label>


//         <select name="favColor" id="favColor" defaultValue="" required>
//           <option value="" disabled> --Choose a color --</option>
//         <option > Red</option>
//         <option >orange</option>
//         <option >green</option>
//         <option >yellow</option>
//         <option >blue</option>
//         </select>
        

//         <button>Submit</button>

//       </form>
//     </section>
//   )
// }
// import React from "react"
// import Count from './components/count'

// export default function App() {
//     const [count, setCount] = React.useState(0)

//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }

//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     return (
//         <main className="container">
//             <div className="counter">
//                 <button
//                     className="minus"
//                     onClick={subtract}
//                     aria-label="Decrease count"
//                 >-</button>

//                 <Count number = {count}/>

//                 <button
//                     className="plus"
//                     onClick={add}
//                     aria-label="Increase count"
//                 >+</button>
//             </div>
//         </main>
//     )
// }
// import React from "react"
// import padsData from "./components/pads"
// import Pad from './components/pad'
// export default function App({darkMode}) {
//     const styles = {
//         backgroundColor : darkMode ? "#222222" : "#cccccc"
//     }
//     const [pads, setPads] = React.useState(padsData)
//     function toggle(id){
//         setPads(prevPads => prevPads.map(item => {
//             return 
//                 item.id === id ? {...item , on: !item.on} : item
            
//         }))
//     }
    
//     const buttonElements = pads.map(pad => (
//         <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
//     ))
    
//     return (
//         <main>
//             <div className="pad-container">
//                 {buttonElements}
//             </div>
//         </main>
//     )
// }