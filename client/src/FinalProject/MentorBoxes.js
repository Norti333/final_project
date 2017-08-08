import React from 'react';

class MentorBoxes extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="equalHMV eq">
                <div className="media">
                    <span className="glyphicon glyphicon-trash pull-right"></span>
                    <div className="media-left">
                        <img src={this.props.icon} alt={this.props.name} className="media-object" style={{ width: 60 }} /></div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.name}</h4>
                        <p>{this.props.text}- {this.props.feelslike_c} &nbsp;| C</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MentorBoxes;