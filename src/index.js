import React from 'react'
import {render} from 'react-dom'

class MyFileInput extends React.Component {


    constructor(props) {
        super(props)
        this.handleFile = this.handleFile.bind(this)
    }

    handleFile(event) {
        event.preventDefault();
        alert("File selected called "+this.fileInput.files[0].name)
    }

    render() {
        return (
            <form>
                <label>
                    Load your file
                    <input type='file' onChange={this.handleFile} ref={input => {
                        this.fileInput = input;
                    }}/>
                </label>
            </form>
        )
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h1>It is</h1>
                <InnerClock date={this.state.date.toLocaleTimeString()}/>
            </div>
        )
    }
}

class InnerClock extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.date}</h2>
            </div>
        )
    }
}

class ButtonStopClock
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: "black",
            isToggleOn: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }

    handleClick() {
        this.setState(prevState => ({
            background: 'red',
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // handleClick2 = () => {
    //     this.setState(prevState => ({
    //         background: 'red',
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
}


// const MouseTracker =

render(
    <div>
        <Clock/>
        <ButtonStopClock/>
        <MyFileInput/>
    </div>,
    document.getElementById('root')
)