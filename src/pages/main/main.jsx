import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// API
import { getAllEpisodes } from '../../services/api';

// Utils
import { groupBy } from '../../utils/utils';

//STYLES
import './main.scss';

const Main = () => {
	let [episodesList, setEpisodesList] = useState([]);

	const getEpisodesBySeasons = async () => {
		const episodes = await getAllEpisodes();
		const groupedEpisodes = groupBy(episodes, 'season');
		setEpisodesList(groupedEpisodes);
	};

	useEffect(getEpisodesBySeasons, []);

	return (
		<div className='seasons-container'>
			{Object.keys(episodesList).map((season) => {
				return (
					<div key={season}>
						<h2>Season {season}</h2>
						{episodesList[season].map((episode) => {
							return (
								<div key={episode.episode_id}>
									<Link className='episode-container' to={`/episode/${episode.episode_id}`}>
										<span className='name'> {episode.title} </span>
										<span className='date'> {episode.air_date} </span>
									</Link>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Main;
