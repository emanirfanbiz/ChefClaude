 import { createRoot } from 'react-dom/client'
 import './index.css'
 import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <App  darkmode = {true}/>

)

// import ReactDOM from 'react-dom/client'
// function App(){
//     function handleClick(){

//     }

//     return (
//         <main className='container'>
//             <img
//              src="https://picsum.photos/640/360"
//              alt="Here is a picture" />
//             <button  onClick = {handleClick}>
//                 Click me
//             </button>
//         </main>
//     )

// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)