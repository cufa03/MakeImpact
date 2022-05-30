import React from 'react';
import BackFooter from '../../components/backFooter';
import './styles.css';
import SectorsItem from './sectorsItem';
import {
	aerospace,
	automobil,
	drugs,
	forestry,
	generalRetailers,
	alternativeEnergy,
	supportServices,
	personalGoods,
} from './imagesImport';
const Sectors = () => {
	return (
		<div className="sectors__container">
			<h2>Sectors</h2>
			<div>
				<SectorsItem image={automobil} sectorName="Financial Services ()" />
				<SectorsItem
					image={alternativeEnergy}
					sectorName="Alternative Energy ()"
				/>
				<SectorsItem
					image={generalRetailers}
					sectorName="General Retailers ()"
				/>
				<SectorsItem image={forestry} sectorName="Forestry & Paper ()" />
				<SectorsItem image={drugs} sectorName="Food & Drug Retailers ()" />
				<SectorsItem image={supportServices} sectorName="Support Services ()" />
				<SectorsItem image={personalGoods} sectorName="Personal Goods ()" />
				<SectorsItem image={aerospace} sectorName="Aerospace & Defense ()" />
				<SectorsItem
					image={generalRetailers}
					sectorName="General Retailers ()"
				/>
				<SectorsItem image={forestry} sectorName="Forestry & Paper ()" />
			</div>
			<BackFooter />
		</div>
	);
};

export default Sectors;
