import React, { Component } from 'react';

class Pagetitle extends Component {
    render() {
        return (
            <mytitle>
                <h3>React aducqtioon!! here {this.props.title}</h3>
                <h3>현재시각은 :  {this.props.toLocaleTimeString}</h3>
            </mytitle>
        );
    }
}

export default Pagetitle;

