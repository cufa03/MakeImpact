import React from 'react';
import './styles.css';
const OldSwipe = () => {
	const handleBackground = (event) => {
		console.log(event.target);
	};
	return (
		<div>
			<div>
				<p>HELLO WORLD</p>
			</div>
			<div id="button-background" onClick={handleBackground}>
				<span class="slide-text">Swipe</span>
				<div id="slider">
					<i id="locker" class="material-icons">
						lock
					</i>
				</div>
			</div>
		</div>
	);
};

export default OldSwipe;
