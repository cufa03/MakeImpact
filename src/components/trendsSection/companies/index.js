import React from 'react';
import './styles.css';
const Company = ({ image, logo, title, info, price }) => {
	return (
		<div className="company__container">
			<img className="company__background" alt="background" src={image} />
			<div className="company__container__content">
				<div className="logo__container">
					<img alt="logo" src={logo} />
				</div>
				<div className="content__wraper">
					<p className="title">{title}</p>
					<p className="info">{info}</p>
				</div>
				<p className="title">{price}</p>
			</div>
		</div>
	);
};

export default Company;
