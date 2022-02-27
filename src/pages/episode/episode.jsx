import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// API
import { getEpisodeById } from '../../services/api';

//STYLES
import './episode.scss';

const Episode = () => {
	let params = useParams();
	let [episode, setEpisode] = useState([]);
	const [loading, setLoading] = useState(true);

	const getEpisode = async () => {
		const episode = await getEpisodeById(params.id);
		setEpisode(episode[0]);
		setLoading(false);
	};

	useEffect(getEpisode, []);

	return loading ? (
		<div>Loadig... </div>
	) : (
		<div className='episode-container'>
			<div className='title'>
				Episod {episode.episode} - {episode.title}
			</div>
			<span className='date'>On air: {episode.air_date}</span>

			<div className='characters'>
				Characters participate:
				<ul>
					{episode.characters?.map((character) => {
						return (
							<li key={character.char_id}>
								<Link to={`/character/${character}`}>{character}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Episode;
