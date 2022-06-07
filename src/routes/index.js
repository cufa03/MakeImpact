import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Sectors from '../pages/sectors';
import Sector from '../pages/sector';
import SectorDescription from '../components/sectorDescription';
import SectorCompanies from '../components/sectorCompanies';
import NewPage from '../components/newPage';
const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="sectors" element={<Sectors />}>
					<Route path=":Id" element={<Sector />} />
				</Route> */}
				<Route path="sectors" element={<Sectors />} />
				<Route path="description" element={<SectorDescription />} />
				<Route path="sectorCompanies" element={<SectorCompanies />} />
				<Route path="newPage" element={<NewPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
