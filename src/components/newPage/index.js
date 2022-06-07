import React from 'react';
import './styles.css';
const NewPage = () => {
	const testing = () => {
		console.log('swipe confirm');
	};
	const handleBackground = (event) => {
		console.log(event.target.class);
	};
	return (
		<div>
			<div>
				<p>HELLO WORLD</p>
			</div>
			<div id="button-background" onClick={handleBackground}>
				<span class="slide-text">Swipe</span>
				<div id="slider" onMouseDown={testing}>
					<i id="locker" class="material-icons">
						lock
					</i>
				</div>
			</div>
		</div>
	);
};

export default NewPage;
