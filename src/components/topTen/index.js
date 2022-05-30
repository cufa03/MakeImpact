import React from 'react';
import TopTenItem from './topTenItem';
import './styles.css';
import alternativeEnergy from '../../assets/alternativeEnergy.jpeg';
import logoVestas from '../../assets/logoVestas.png';
const TopTen = ({ category, companiesArray }) => {
	const showList = () => {
		return companiesArray.map((e) => {
			if (e.category === category) {
				return (
					<TopTenItem
						logo={logoVestas}
						image={alternativeEnergy}
						companyName={e.company}
						price={e.price}
					/>
				);
			}
		});
	};
	return (
		<div className="category__container">
			<div className="category__text">
				<p>{category} Top 10</p>
				<p>View All</p>
			</div>
			<div className="items">
				{showList()}
				{/* <TopTenItem
					logo={logoVestas}
					image={alternativeEnergy}
					companyName="Vestas"
					price="24,26 $"
				/>
				<TopTenItem
					logo={logoVestas}
					image={alternativeEnergy}
					companyName="Chr. Hansen"
					price="73 $"
				/>
				<TopTenItem
					logo={logoVestas}
					image={alternativeEnergy}
					companyName="Autodesk"
					price="38,63 $"
				/> */}
			</div>
		</div>
	);
};

export default TopTen;
