import React from 'react';
import './styles.css';
import xicon from '../../assets/Trace-967.svg';

const SectorDescription = () => {
	return (
		<div className="description__container">
			<div className="bg-image">
				<div></div>
			</div>

			<div className="description__container__text">
				<h4>() Alternative Energy</h4>
				<p>
					CSA 100 accelerates the adoption of Climate Smart Agriculture (CSA) in
					the food, beverage and agriculture sector. Showing that business plays
					a critical role in meeting the Paris Agreement, the initiative brings
					together 100 influential companies to make science-based and
					measurable commitments to 2030, across three pillars: Productivity,
					resilience and mitigation. Making progress on mitigation in the food
					and agriculture sector is particularly crucial to meet the Paris
					Agreement, as it represents 25% of all GHG emissions. This sector is
					also the most vulnerable to climate change, and yet it must grow
					substantially in order to meet the daily nutritional needs of 10
					billion people by 2050.
				</p>

				<div className="caca">
					<img alt="" src={xicon} />
				</div>
			</div>
		</div>
	);
};

export default SectorDescription;
