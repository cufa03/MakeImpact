import React from 'react';
import HomeFooter from '../../components/homeFooter';
import TopNav from '../../components/topNav';
import TrendingCompanies from '../../components/trendsSection';
import TopTen from '../../components/topTen';
import UserProfile from '../../components/userProfile';
import './styles.css';
import data from '../../assets/data.json';

// categoryList = ["Biodiversity", "Diversity", "Health"]
// fullList = [{"category":"Biodiversity", a:[...]},{"category":"Diversity & Inclusin", [...]},{"category":"Health", [...]}]

const Home = () => {
	let categoryList = [];
	const categoryCounter = (data) => {
		return data.map((e) => {
			if (!categoryList.includes(e.category)) {
				categoryList.push(e.category);
			}
		});
	};
	categoryCounter(data);

	const categoryListPrinter = () => {
		return categoryList.map((e) => {
			return <TopTen category={e} companiesArray={data} />;
		});
	};
	return (
		<div className="home">
			<div className="home__content">
				<UserProfile />
				<TopNav />
				<TrendingCompanies />
				{categoryListPrinter()}
			</div>
			<HomeFooter />
		</div>
	);
};

export default Home;
