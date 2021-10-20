import React from "react";
import Avatar from "../Avatar/Avatar";
import Styles from "./TeamCard.module.css";

class TeamCard extends React.Component {
    render() {
        return(
            <div className={Styles.teamcard} teamname={this.props.teamName}>
                <Avatar Url={this.props.url}/>
            </div>
        );
    }
}

export default TeamCard;