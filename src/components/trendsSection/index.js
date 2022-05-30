import React from 'react';
import Company from './companies';
import chip from '../../assets/chip.jpeg';
import schneider from '../../assets/schneider.png';
import './styles.css';
const TrendingCompanies = () => {
	return (
		<div className="container">
			<h2>Trending Companies</h2>
			<div className="slider">
				<Company
					image={chip}
					logo={schneider}
					title="Schneider"
					info={`Electronic & Electrical Equipment`}
					price="49,60$"
				/>
			</div>
		</div>
	);
};

export default TrendingCompanies;
