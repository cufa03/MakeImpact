import React from 'react';

const FooterElement = ({ text, icon }) => {
	return (
		<div className="footer__element">
			<div>{icon}</div>
			<p>{text}</p>
		</div>
	);
};

export default FooterElement;
