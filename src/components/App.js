import React, {useState} from "react";
import Nav from "./Nav";
import Tile from "./Tile"

import hogs from "../porkers_data";

function App() {

	const [allHogs, setAllHogs] = useState(hogs)
	const [greasedFilter, setGreasedFilter] = useState(false)

	const hogsToDisplay = allHogs.filter((hog) => {
		if (greasedFilter === false) {
			return true;
		}
		else {
			return hog.greased === greasedFilter
		}
	})

	function handleFilter(event) {
		

		event.target.innerText = greasedFilter ?  "Greased Filter Off" : "Greased Filter On" 
		setGreasedFilter((greasedFilter) => !greasedFilter)
	}

	function handleNameSort(event) {
		const newArray = [...hogsToDisplay]
		newArray.sort(( a, b) => {
			console.log(a)
			console.log(b)

			if (a.name < b.name) {
				return -1;
			  }
			  if (a.name > b.name) {
				return 1;
			  }
			
			  // names must be equal
			  return 0;

			
		})
		setAllHogs(newArray)
		console.log(newArray)
	}

	function handleWeightSort(event) {
		const newArray = [...hogsToDisplay]
		newArray.sort(( a, b) => {
			console.log(a)
			console.log(b)

			if (a.weight < b.weight) {
				return -1;
			  }
			  if (a.weight > b.weight) {
				return 1;
			  }
			
			  // names must be equal
			  return 0;

			
		})
		setAllHogs(newArray)
		console.log(newArray)
	}

	

	// console.log(hogsToDisplay)

	
	return (
		<div className="App">
			<Nav />
			<br></br>
			<button onClick={(event) => handleFilter(event)}>Greased Filter Off</button>
			<br></br>
			<br></br>
			<button onClick={() => handleWeightSort()}>Sort By Weight</button>
			<button onClick={() => handleNameSort()}>Sort By Name</button>
			{ hogsToDisplay.map((hog) => {
				
				return <Tile hog={hog}/>
			})}

			
		</div>
	);
}

export default App;
