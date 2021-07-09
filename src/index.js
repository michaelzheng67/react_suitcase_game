import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class SuitcaseOne extends React.Component {
    render() {
    return (<button onClick={this.props.onClick}><img src="https://www.seekpng.com/png/detail/221-2210510_work-briefcase-clipart-briefcase-info-icon-white.png" alt="briefcase">
        </img></button>);
    }
}

const winbutton = {
    fontSize: '40px',
    JustifyItems: 'center',
    textAlign: 'center',
    font: 'Times new Roman'
}

class SecureWinnings extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick} style={winbutton}>Secure Winnings</button>
        );
    }
}

const score_style = {
    textAlign: 'center',
    font: 'Times new Roman'
}

const grid_style = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto auto'
}

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {score: 0};
        this.handleClick = this.handleClick.bind(this);
        this.handleClickWinnings = this.handleClickWinnings.bind(this);
    }

    handleClick() {
        let newScore;
        if (Math.random() * 100 <= 1000) {
            newScore = + this.state.score + Math.floor(Math.random() * 100000);
        } else {
            newScore = "You Lost. Browser is now refreshing"
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        }

        if (newScore >= 1000000) {
            newScore = "Congrats, you are a millionaire!";
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        }
        
        this.setState({score: newScore});
    }

    handleClickWinnings() {
        const winner = "You Won $" + this.state.score + " !";
        this.setState({score: winner});
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }

    render() {
        return (<div>
        <h1 style={score_style}>{this.state.score}</h1>
        <div style={grid_style}>
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        <SuitcaseOne onClick={this.handleClick} />
        </div>
        <SecureWinnings onClick={this.handleClickWinnings} />
        </div>);
    }
 }



 ReactDOM.render(<Score />, document.getElementById("score"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
