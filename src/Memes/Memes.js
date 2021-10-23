import React from "react";
import Styles from "./Memes.module.css";

class Memes extends React.Component {
    render() {
        return(
            <img src={this.props.url} className={Styles.memes}/>
        );
    }
}

export default Memes;