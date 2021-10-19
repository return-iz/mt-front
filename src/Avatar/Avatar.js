import React from "react";
import Styles from "./Avatar.module.css";

class Avatar extends React.Component {
    render() {
        return(
            <img src={this.props.Url} className={Styles.avatar} alt="Avatar"/>
        );
    }
}

export default Avatar;