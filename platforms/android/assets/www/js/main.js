import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'

class App extends React.Component{
    render(){
        //Call Form Component
        return (
            <div>
                <Form/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));