import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
// import Arrow from './arrow.png';
import RightArrow from './rightArrow.png';

import './styles.css';

function findLeft(element) {
	var rec = element.getBoundingClientRect();
	return rec.left + window.scrollX;
}

function SwipeButton({
	mainText,
	overlayText,
	onSwipeDone,
	reset,
	classList = '',
	overlayClassList = '',
	caretClassList = '',
	delta = 10,
	minSwipeWidth = 1,
	minSwipeVelocity = 0.5,
	caret = null,
	// setChecked,
	// onConfirm,
}) {
	// const [checked, setChecked] = useState(false);
	const [overlayWidth, setOverlayWidth] = useState(0);
	const [swipeComplete, setSwipeComplete] = useState(false);
	const buttonRef = useRef();

	useEffect(() => {
		if (reset) {
			setSwipeComplete(false);
			setOverlayWidth(0);
		}
	}, [reset]);

	const handlers = useSwipeable({
		onSwipedRight: (data) => {
			if (swipeComplete) return;
			const butWidth = buttonRef.current.offsetWidth;
			if (data.velocity > minSwipeVelocity) {
				setOverlayWidth(butWidth);
				setSwipeComplete(true);
				// setChecked(true);
				// onConfirm();
				// setTimeout(() => onSwipeDone(), 100);
				onSwipeDone();
			} else {
				const offsetLeft = findLeft(buttonRef.current);
				const startPos = Math.abs(data.initial[0] - offsetLeft);
				if (
					startPos <= 100 &&
					(data.event.type === 'touchend'
						? data.event.changedTouches[0].clientX - offsetLeft
						: data.event.offsetX) >
						minSwipeWidth * butWidth
				) {
					setOverlayWidth(butWidth);
					setSwipeComplete(true);
					// setChecked(true);
					// onConfirm();
					// setTimeout(() => onSwipeDone(), 100);
					onSwipeDone();
				} else setOverlayWidth(40);
			}
		},
		onSwiping: (data) => {
			if (swipeComplete) return;
			const offsetLeft = findLeft(buttonRef.current);
			const startPos = Math.abs(data.initial[0] - offsetLeft);
			if (startPos <= 100) {
				if (data.event.type && data.event.type === 'touchmove')
					setOverlayWidth(data.event.touches[0].clientX - offsetLeft);
				else setOverlayWidth(data.event.offsetX);
			}
		},
		delta,
		trackMouse: true,
		preventDefaultTouchmoveEvent: true,
	});

	return (
		<div className="slide__btn__wrapper">
			<div
				className={`swipezor-but ${classList}`}
				{...handlers}
				ref={(t) => {
					handlers.ref(t);
					buttonRef.current = t;
				}}
			>
				<div
					className={`swipezor-overlay ${overlayClassList} ${
						overlayWidth > 50 ? 'bg-after' : 'bg-before'
					}`}
					style={{ width: overlayWidth }}
					id="swipzor-overlay"
				>
					<div className="swipezor-overlay-wrapper ">
						<div className={`swipezor-caret-wrapper ${caretClassList}`}>
							{caret ? (
								caret
							) : (
								<img
									src={RightArrow}
									alt="caret"
									style={{ maxWidth: '100%' }}
								/>
							)}
						</div>
						<div
							className={`swipezor-overlay-txt ${
								overlayWidth > 70 ? 'opacity-1' : 'opacity-0'
							}`}
						>
							{overlayText}
						</div>
					</div>
				</div>
				<p className="main-text">{mainText}</p>
			</div>
		</div>
	);
}

export default SwipeButton;
