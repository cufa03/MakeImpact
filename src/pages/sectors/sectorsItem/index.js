import React from 'react';
import './styles.css';
// import image from '../../../assets/alternativeEnergy.jpeg';
const SectorsItem = ({ sectorName, image }) => {
	return (
		<div className="sector__item__container">
			<div>
				<img alt="" src={image} />
			</div>
			<div>
				<p>{sectorName}</p>
				<p>?</p>
			</div>
		</div>
	);
};

export default SectorsItem;
