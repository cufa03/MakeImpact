import React from 'react';
import './styles.css';
import News from '../../assets/Trace-173.js';
import Invest from '../../assets/Trace-193.js';
import Academy from '../../assets/Trace-522.js';
import MyClub from '../../assets/Trace-235.js';
import FooterElement from './FooterElement';
const Footer = () => {
	return (
		<div className="footer">
			<FooterElement text="Matches" icon={<News />} />
			<FooterElement text="News" icon={<News />} />
			<FooterElement text="Invest" icon={<Invest />} />
			<FooterElement text="Academy" icon={<Academy />} />
			<FooterElement text="MyClub" icon={<MyClub />} />
		</div>
	);
};

export default Footer;
