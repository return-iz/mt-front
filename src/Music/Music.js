import React from "react";
import Duration from "../Duration/Duration";
import Styles from "./Music.module.css";

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: null,
            curTime: 0,
            duration: 0,
        }
    }

    componentDidMount() {
        let audio = document.getElementById(this.props.url);

        this.setState({
            audio: audio,
            curTime: audio.currentTime,
            duration: audio.duration
        });

        setInterval(() => this.updateTimer(), 500);
    }

    updateTimer = () => {
        this.setState({
            curTime: this.state.audio.currentTime,
            duration: this.state.audio.duration
        });
    }

    clickHandler = () => {
        if (this.state.audio.paused) this.state.audio.play();
        else this.state.audio.pause();
    }

    resetHandler = () => {
        this.state.audio.currentTime = 0;
    }

    render() {
        return(
            <div className={Styles.music}>
                <audio src={this.props.url} id={this.props.url}></audio>
                <div className={Styles.playpause} onClick={this.clickHandler}>Play / Pause</div>
                <div className={Styles.title}>{this.props.url}</div>
                <div onClick={this.resetHandler}><Duration  cur={this.state.curTime} max={this.state.duration}/></div>
            </div>
        );
    }
}

export default Music;