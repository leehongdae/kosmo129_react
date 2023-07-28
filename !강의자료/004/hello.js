import React, { Component } from 'react'

class Hello extends Component {
    render() {
        return(
            <div>
                <p>
                    Hello {this.props.text} // 정의 된 props 호출
                </p>
            </div>
        );
    }
}

export default Hello;