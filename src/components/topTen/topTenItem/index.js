import React from 'react';
import './styles.css';

const TopTenItem = ({ logo, image, companyName, price }) => {
	return (
		<div className="item">
			<div className="item__header">
				<img className="card__background" alt="card background" src={image} />

				<div className="card__logo__container">
					<img className="card__logo" alt="card logo" src={logo} />
				</div>
			</div>
			<div className="item__description">
				<p>{companyName}</p>
				<p>{price}</p>
			</div>
		</div>
	);
};

export default TopTenItem;
