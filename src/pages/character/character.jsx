import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// API
import { getCharacterByName } from '../../services/api';

//STYLES
import './character.scss';

const Character = () => {
	let params = useParams();
	let [character, setCharacter] = useState([]);
	const [loading, setLoading] = useState(true);

	const getCharacter = async () => {
		const character = await getCharacterByName(params.name);
		setCharacter(character[0]);
		setLoading(false);
	};

	useEffect(getCharacter, []);

	return loading ? (
		<div>Loadig... </div>
	) : (
		<div className='character-container'>
			<img src={character.img} />
			<div className='data-container'>
				<p className='title'>{character.name}</p>
				<p>Date of birthday: {character.birthday}</p>
				<p>Nickname: {character.nickname}</p>
				<p>My status: {character.status}</p>
				<p>
					Occupation :
					<ul>
						{character.occupation?.map((occu, index) => (
							<li key={index}>{occu}</li>
						))}
					</ul>
				</p>
			</div>
		</div>
	);
};

export default Character;
