import React from 'react';

class Messages extends React.Component {
    render() {
        return (
            <p className="user-message">
                {this.props.details.pseudo} : {this.props.details.message}
            </p>
        )
    }
}


export default Messages;