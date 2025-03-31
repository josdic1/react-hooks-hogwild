import React from "react";
import Nav from "./Nav";
import List from "./List";

import hogs from "../porkers_data";

function App() {
	return (
		<>
		<div className="App">
			<Nav />
			<List data={hogs}/>
		</div>
		</>
	);
}

export default App;
