import React, { useState } from "react"
import PigStats from "./PigStats"

function Tile(props) {


    const [toggle, setToggle] = useState(false)
    

    function handleTileClick(hog) {
        
        setToggle((toggle) => !toggle)
    }

    // props.isGreased
    
        
            

        return (

        <div onClick={() => handleTileClick(props.hog)} className={"ui grid container"}>
        <h1 className={"ui eight wide column"}>{props.hog.name}</h1>
        <PigStats toggled={toggle} hog={props.hog} />
        <img className={"ui eight wide column"} src={props.hog.image}></img>
        </div>

        )

        
    
}

export default Tile;