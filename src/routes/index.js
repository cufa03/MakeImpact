import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Sectors from '../pages/sectors';
// import Sector from '../pages/sector';
import SectorDescription from '../components/sectorDescription';
import SectorCompanies from '../components/sectorCompanies';
// import OldSwipe from '../components/oldSwipe';
import NewSwipe from '../components/newSwipe';
import DragBtn from '../components/dragNconfirm';
import Benjamon from '../components/benjamon';
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
				{/* <Route path="oldSwipe" element={<OldSwipe />} /> */}
				<Route path="newSwipe" element={<NewSwipe />} />
				<Route path="dragBtn" element={<DragBtn />} />
				<Route path="benjamon" element={<Benjamon />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
