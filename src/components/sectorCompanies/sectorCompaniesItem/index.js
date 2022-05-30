import React from 'react';

const SectorCompaniesItem = ({ logo = 'logo', companyName, price }) => {
	return (
		<div className="sc__company__item">
			<div>
				<img alt="" src={logo} />
			</div>
			<div>
				<p>{companyName}</p>
				<p>{price}</p>
			</div>
			<div className="sc__company__arrow">{`>`} </div>
		</div>
	);
};

export default SectorCompaniesItem;
