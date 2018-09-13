import React from 'react';
import Formulaire from './Formulaire';
import Messages from './Messages';

class App extends React.Component {

    state = {
        messages: {}
    }

    addMessage = message => {
        // Copy the state
        const messages = {...this.state.messages};
        // Adding messages with timestamps
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        // Update the state
        this.setState({ messages });
    }; 

    render() {
        return (
           <div className="box">
               <div>
                   <div className="messages">
                   <Messages pseudo={this.props.params.pseudo} />
                   </div>
                   <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140" />
               </div>
           </div>
        )
    }
}


export default App;