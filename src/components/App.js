import { useState} from 'react';
import Nav from "./Nav";
import Filter from "./Filter";
import List from "./List";
import Form from "./Form";

import hogs from "../porkers_data";

function App() {


	const [sortedList, setSortedList] = useState(hogs)
	const [selectedHog, setSelectedHog ] = useState({
		name: '',
		specialty: "",
		greased: false,
		weight: 0,
		"highest medal achieved": "",
		image: ''
	})

	function handleSelectThisHog(pig) {
		setSelectedHog(prevData => ({
			...prevData,
			...pig
		}))
	}

	function handleSort({ nameSelect, weightSelect }) {
		let list = [...sortedList]; 
	  
		if (nameSelect === "az") list.sort((a, b) => a.name.localeCompare(b.name));
		if (nameSelect === "za") list.sort((a, b) => b.name.localeCompare(a.name));
		if (weightSelect === "az") list.sort((a, b) => a.weight - b.weight);
		if (weightSelect === "za") list.sort((a, b) => b.weight - a.weight);
	  
		setSortedList(list);
	  }

	  function handleSubmit(newPig) {
		setSortedList([newPig, ...sortedList])
	  }

	return (
		<>
		<div name="App">
			<Nav />
			<div name="ui card">
  <div name="content">
    <div name="center aligned header">Name: {!selectedHog || selectedHog.name === "" ? "<empty>" : selectedHog.name}</div>
    <div name="center aligned description">

		{!selectedHog.name  ? "" : 
		<ul>
			<li>Specialty: {selectedHog.specialty || ''}</li>
			<li>Greased: {selectedHog.greased ? "YES" : "NO"}</li>
			<li>Weight: {selectedHog.weight || 0}</li>
			<li>highest medal achieved: {selectedHog["highest medal achieved"] || 0}</li>
			
		</ul>
		}

    </div>
  </div>
  <div name="extra content">
  <div className="image">{selectedHog.image ? 
    <img src={selectedHog.image} style={{ height: '45px' }} alt="pig pic"/> : '<empty>'
  }
  </div>
  </div>
</div>
			<Form onSubmit={handleSubmit}/>
			<Filter handleSort={handleSort}/>
			<List 
			data={sortedList.length > 0 ? sortedList : hogs}
			selectThisHog={handleSelectThisHog}
			/>
		</div>
		</>
	);
}

export default App;
