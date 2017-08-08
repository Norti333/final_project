import React from 'react';

class Options extends React.Component {
    render() {
        return (
            <option value={this.props.item.name}>{this.props.item.name}</option>
        )
    }
}

export default Options;