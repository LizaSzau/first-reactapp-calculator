import React from 'react';
//import ReactDOM from 'react-dom'; 
import Calculator from './Calculator';
import './App.sass';

function App() {
	const replaceTheme = (newThemeName) => {
		document.getElementById('body').className = newThemeName;
	}

	replaceTheme("dark-theme")
	
	return (
		<div>
			<h1>Calculator</h1>
			<div id="theme-buttons">
				<button onClick={() => replaceTheme("dark-theme")}>Dark theme</button>
				<button onClick={() => replaceTheme("light-theme")}>Light theme</button>
			</div>
		</div>
	);
}

export default App;
