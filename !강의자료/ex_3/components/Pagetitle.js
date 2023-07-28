import React, { Component } from 'react'


class Pagetitle extends Component {

	render() {

		return (

			<mytitle>
				<h3>React 배워봅신다!! 여기는 {this.props.title}</h3>
				<h3>현재시각은 : {this.props.now.toLocaleTimeString()}</h3>
			</mytitle>
		);
	}
};



export default Pagetitle;