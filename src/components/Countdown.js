import React, { Component } from 'react';
import bulma from 'bulma/css/bulma.css';
import moment from 'moment';
import CountdownControls from './CountdownControls';

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          duration: this.getTimeFromNow(),
          paused: false,
        };
    }

    componentDidMount() {
        this.resume();
    }

    getTimeFromNow() {
        let now = moment();
        const duration = moment([2019, 0, 1]).diff(now);
        this.setState({ duration });
    }


    resume = () => {
        this.setState({paused: false});
        this.timerId = setInterval(() => this.getTimeFromNow(), 1000);
    }
    
    pause = () => {
        this.setState({paused: true});
        clearInterval(this.timerId);
    }
    
    render() {
        const duration = moment.duration(this.state.duration);
        return (
            <section className="hero is-dark is-bold is-fullheight">
                <div className="hero-body">
                    <div className="container is-centered">
                        <nav className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="title">{duration.asDays().toFixed(0)}</p>
                                    <p className="heading">Days</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="title">{duration.hours()}</p>
                                    <p className="heading">Hours</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="title">{duration.minutes()}</p>
                                    <p className="heading">Minutes</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered is-bold">
                                <div>
                                    <p className="title">{duration.seconds()}</p>
                                    <p className="heading">Seconds</p>
                                </div>
                            </div>
                        </nav>
                        <CountdownControls
                            paused={this.state.paused}
                            onPaused={this.pause}
                            onResumed={this.resume}
                        />
                    </div>
                </div>
            </section>
        );
    }
}