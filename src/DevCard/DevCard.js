import React from "react";
import Avatar from "../Avatar/Avatar";
import DevInfo from "../DevInfo/DevInfo";
import Styles from "./DevCard.module.css";

class DevCard extends React.Component {
    render() {
        return(
            <div className={Styles.devcard}>
                <Avatar Url={this.props.Url} />
                <DevInfo Name={this.props.Name} Bio={this.props.Bio} />
            </div>
        );
    }
}

export default DevCard;