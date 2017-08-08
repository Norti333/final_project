import React from 'react';

class MentorBoxes extends React.Component {
    render() {
        return (
            <div className="equalHMV eq">
                <div className="media">
                    <div className="media-left">
                        <img src={this.props.item.img} alt={this.props.item.name} className="media-object" style={{ width: 60 }} /></div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.item.name}</h4>
                        <p>{this.props.item.text}- </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MentorBoxes;