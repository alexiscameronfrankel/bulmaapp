import React, { Component } from 'react';

class CoolButton extends Component {
    render() {
        return (
            <div>

<button className={this.props.className}>{this.props.buttonname}</button>
                
            </div>
        );
    }
}

export default CoolButton;