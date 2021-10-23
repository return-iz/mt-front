import React from "react";
import Music from "../Music/Music";
import Styles from "./MusicList.module.css";

class MusicList extends React.Component {
    render() {
        return(
            <div className={Styles.musiclist}>
                <Music url="01.mp3"/>
                <Music url="02.mp3"/>
                <Music url="03.mp3"/>
            </div>
        );
    }
}

export default MusicList;