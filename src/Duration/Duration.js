import React from "react";
import Styles from "./Duration.module.css";

class Duration extends React.Component {



    render() {
        return(
            <div className={Styles.duration}>
                {Math.floor(this.props.cur)} / {Math.floor(this.props.max)}
            </div>
        );
    }
}

export default Duration;