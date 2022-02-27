import React from 'react';
import { Routes, Route, withRoute } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Main from './pages/main/main';
import Episode from './pages/episode/episode';
import Character from './pages/character/character';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route exact path='/episode/:id' element={<Episode />} />
				<Route exact path='/character/:name' element={<Character />} />
			</Routes>
			{/* <Main /> */}
		</div>
	);
}

export default App;
