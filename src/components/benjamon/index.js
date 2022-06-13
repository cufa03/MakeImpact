import { Component } from 'react';
import Switch from 'react-switch';
import './styles.css';
export default class MaterialDesignSwitch extends Component {
	constructor() {
		super();
		this.state = { checked: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(checked) {
		this.setState({ checked });
	}

	render() {
		return (
			<div className="example">
				<Switch
					checked={this.state.checked}
					onChange={this.handleChange}
					onColor="#f2aab6"
					onHandleColor="#ffffff"
					handleDiameter={45}
					uncheckedIcon={false}
					boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
					height={51}
					width={268}
					className="react-switch"
					id="material-switch"
				/>
			</div>
		);
	}
}
