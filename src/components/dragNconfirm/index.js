import React from 'react';
import './styles.css';
const DragBtn = () => {
	return (
		<div id="outerContainer">
			<div class="track_drag animate">
				<div id="item"></div>
				{/* <p class="track_text track_text--end animate">Comfirmed</p> */}
				<p class="track_text track_text--after animate">Comfirming...</p>
				<p class="track_text track_text--before animate">Slide to Confirm</p>
			</div>
		</div>
	);
};

export default DragBtn;
