import React from 'react';
import SectorCompaniesItem from './sectorCompaniesItem/';
import './styles.css';
import backImage from '../../assets/alternativeEnergy.jpeg';
import atlanticaLogo from '../../assets/logoAtlantica.png';
import BackFooter from '../backFooter';
const SectorCompanies = () => {
	return (
		<div className="sector-companies__container">
			<div className="sc-header">
				<img src={backImage} alt="building" />
			</div>
			<div className="sc-body">
				<div className="sc-body__title">
					<p>() Alternative Energy</p>
					<p>?</p>
				</div>
				<div className="sc-body__content">
					<SectorCompaniesItem
						logo={atlanticaLogo}
						companyName="Atlantica Yield"
						price="82,69 $"
					/>
					<SectorCompaniesItem
						logo={atlanticaLogo}
						companyName="Scatec Solar"
						price="134,69 $"
					/>
					<SectorCompaniesItem
						logo={atlanticaLogo}
						companyName="Siemens Gamesa"
						price="26,53 $"
					/>
					<SectorCompaniesItem
						logo={atlanticaLogo}
						companyName="Vestas"
						price="24,26 $"
					/>
				</div>
			</div>
			<div>
				<BackFooter />
			</div>
		</div>
	);
};

export default SectorCompanies;
