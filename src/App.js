import React from "react";

class App extends React.Component {

    state = {
        second: 0,
        secondItem: 0,
        minute: 0,
        minuteItem:0,
        hour: 0,
        hourItem: 0,
        interval: "",
        btnDisabled: false,
        intervalDiabled: true,
        intervalsStorage: [],
    };

    startBtn = () => {
        let timer = setInterval(() => {
            if(this.state.hourItem === 2 && this.state.hour === 3 && this.state.minuteItem === 5 && this.state.minute === 9 && this.state.secondItem === 5 && this.state.second === 9){
                this.setState({
                    hourItem: 0,
                    hour: 0,
                    minuteItem: 0,
                    minute: 0,
                    secondItem: 0,
                    second: 0,
                })
            }
            if(this.state.hour === 9 && this.state.minuteItem === 5 && this.state.minute === 9 && this.state.secondItem === 5 && this.state.second === 9){
                this.setState({
                    hourItem: this.state.hourItem + 1,
                    hour:0,
                    minuteItem: 0,
                    minute: 0,
                    second: 0,
                    secondItem: 0,
                })
            }
            if(this.state.minuteItem === 5 && this.state.minute === 9){
                this.setState({
                    hour:this.state.hour + 1,
                    minuteItem: 0,
                    minute: 0,
                    second: 0,
                    secondItem: 0,
                })
            }
            if(this.state.minute === 9){
                this.setState({
                    minuteItem:this.state.minuteItem + 1,
                    minute:0,
                })
            }
            if(this.state.secondItem === 5 && this.state.second === 9){
                this.setState({
                    minute:this.state.minute + 1,
                    secondItem:0,
                    second:0,
                })
            };
            if(this.state.second === 9){
                this.setState({
                    secondItem:this.state.secondItem + 1,
                    second:0,
                })
            } else{
                this.setState({second:this.state.second + 1})
            }
        },1000);
        this.setState({
            interval: timer,
            btnDisabled: true,
            intervalDiabled:false,
        })
    };

    stopBtn = () => {
        clearInterval(this.state.interval);
        this.setState({
            btnDisabled: false,
            intervalDiabled:true,
        })
    };

    clearBtn = () => {
        this.setState({
            hourItem:0,
            hour:0,
            minuteItem:0,
            minute:0,
            secondItem:0,
            second:0,
            intervalsStorage:[],
        });
        this.stopBtn();
    }

    intervalBtn = () => {
        const {hourItem,hour,minuteItem,minute,secondItem,second,intervalsStorage} = this.state;
        intervalsStorage.push(`${hourItem}${hour}:${minuteItem}${minute}:${secondItem}${second}`);
        this.setState({
            intervalsStorage:intervalsStorage,
        })
    }
   
    render() {
        const {hour, hourItem, minute, minuteItem, second, secondItem, btnDisabled, intervalsStorage, intervalDiabled} = this.state;

        return <div className="container">
            <div className="timer__container">
            <h1 className="title">Online Stopwatch</h1>
                <div className="timer__box">
                    <div className="timer">
                        <div className="timer__block">
                            <div className="timer__hour">
                                <span>{hourItem}</span>
                                <span>{hour}</span>
                            </div>
                            <span>:</span>
                            <div className="timer__minute">
                                <span>{minuteItem}</span>
                                <span>{minute}</span>
                            </div>
                            <span>:</span>
                            <div className="timer__second">
                                <span>{secondItem}</span>
                                <span>{second}</span>
                            </div>
                        </div>
                        <div className="timer_item">
                            <span className="timer_item__hour">{hourItem}</span>
                            <span className="timer_item__hour">{hour}</span>
                            <span>:</span>
                            <span className="timer_item__minute">{minuteItem}</span>
                            <span className="timer_item__minute">{minute}</span>
                            <span>:</span>
                            <span className="timer_item__second">{secondItem}</span>
                            <span className="timer_item__second">{second}</span>
                        </div>
                    </div>
                </div>
                <div className="timer__btns">
                    <button className="btn btn-success" onClick={this.startBtn} disabled={btnDisabled}>Start</button>
                    <button className="btn btn-danger" onClick={this.stopBtn}>Stop</button>
                    <button className="btn btn-secondary" onClick={this.intervalBtn} disabled={intervalDiabled}>Interval</button>
                    <button className="btn btn-warning" onClick={this.clearBtn}>Clear</button>
                </div>
                <div className="interval__container">
                    {intervalsStorage.map(item => <p className="interval__paragraf">{item}</p>)}
                </div>
            </div>
        </div>
    }
}

export default App;
