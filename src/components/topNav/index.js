import React from 'react';
import './styles.css';

const TopNav = () => {
	return (
		<div className="nav__container">
			<div>Matches</div>
			<div className="active">Explore</div>
			<div>Search</div>
		</div>
	);
};

export default TopNav;
