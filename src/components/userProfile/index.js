import React from 'react';
import './styles.css';
const UserProfile = () => {
	return (
		<div className="user__profile">
			<img
				alt="profile"
				src={`https://apifyusercontent.com/41b03c8462ec5d51567fc61584e159a35546dac5/68747470733a2f2f61706966792d696d6167652d75706c6f6164732d70726f642e73332e616d617a6f6e6177732e636f6d2f6453434c6730433359455a3833487a59582f464378535379464c45644a77396137525a2d696e7374615f70726f66696c655f69636f6e2e706e67`}
				width="44px"
				height="44px"
			/>
			<div>
				<p>Hi Amalie</p>
				<p>Let's find your match!</p>
			</div>
		</div>
	);
};

export default UserProfile;
