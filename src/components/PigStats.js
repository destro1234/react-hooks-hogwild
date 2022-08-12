import React from "react"

function PigStats({toggled, hog}) {

    if (!toggled) {
        return (
            <div>

            </div>
        )
    }

    else if (toggled) {
        return (
            <div>
                <ol className={"ui eight wide column"}>
                    <li> Specialty : {hog.specialty}</li>
                    <li> Greased   : {hog.greased ? "true" : "false"}</li>
                    <li> Weight    : {hog.weight}</li>
                    <li> Medal     : {hog["highest medal achieved"]}</li>
                </ol>
            </div>
        ) 
    }
    
}

export default PigStats;