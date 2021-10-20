import React from "react";
import Styles from "./Video.module.css";

class Video extends React.Component {

    render() {
        return(
            <iframe
                    src={this.props.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                    allowfullscreen
                    className={Styles.video}>
            </iframe>
        );
    }
}

export default Video;