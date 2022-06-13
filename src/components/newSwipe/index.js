import React from 'react';
import SwipeButton from '../swipeButton';
import './styles.css';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
const NewSwipe = () => {
	// const [reset, setReset] = useState(0);
	// const [checked, setChecked] = useState(false);
	let navigate = useNavigate();
	const onConfirm = () => {
		// setChecked(!checked);
		setTimeout(() => {
			console.log('PROBANDO');
			navigate('/');
		}, 1000);
	};
	return (
		<div className="new__swipe__container">
			<p> Creating the slide button </p>
			{/* <div className={`slide__btn__wrapper ${checked ? 'check' : 'uncheck'}`}> */}
			<SwipeButton
				mainText="Swipe to confirm"
				overlayText="Confirming..."
				// reset={reset}
				// setChecked={setChecked}
				onSwipeDone={onConfirm}
			/>
			{/* </div> */}
			{/* <button
				onClick={() => {
					setReset((counter) => counter + 1);
				}}
			>
				Reset
			</button> */}
		</div>
	);
};

export default NewSwipe;
