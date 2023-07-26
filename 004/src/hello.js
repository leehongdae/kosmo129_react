import React, { Component } from "react"

class Hello extends Component {
    render() {
        return(
            <div>
                <p>
                    Hello {this.props.text}
                </p>
            </div>

        );
    }
}

export default Hello