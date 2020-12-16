import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { count: 0 };
    }

    handleClick() {
        this.setState(prevState => ({ count: prevState.count + 1}))
    }

    render() {
        return (
            <div> 
                <h1>Count : {this.state.count}</h1> 
                <button onClick={this.handleClick.bind(this)} >Click</button>
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#root'));