import React from 'react';
import Formulaire from './Formulaire';
import Messages from './Messages';

class App extends React.Component {
    render() {
        return (
           <div className="box">
               <div>
                   <div className="messages">
                   <Messages pseudo="Seb" />
                   </div>
                   <Formulaire />
               </div>
           </div>
        )
    }
}


export default App;