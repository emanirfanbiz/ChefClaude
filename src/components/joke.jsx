import React from 'react'
export default function Joke(props) {
    const [isshown,setIsShown] = React.useState(false)
    function ToggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
           {isshown ? <p className="punchline">Punchline: {props.punchline}</p> : null} 
            <button onClick={ToggleShown}> {isshown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </>
    )
}