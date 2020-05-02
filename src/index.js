import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{color: this.props.color}}>{ this.props.msg }</h1>
                <p>I'll check back in {this.props.minutes} minutes.</p>
            </div>
        )
    }
}

let style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

ReactDOM.render(<Message color="blue" msg="How are you?" minutes={20}/>, document.getElementById('root')
)