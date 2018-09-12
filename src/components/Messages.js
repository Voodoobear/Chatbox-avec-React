import React from 'react';

class Messages extends React.Component {
    render() {
        return (
            <p className="user-message">
                {this.props.pseudo} : mon super message!
            </p>
        )
    }
}


export default Messages;