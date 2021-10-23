import React from "react";
import MusicList from "../MusicList/MusicList";
import PageTitle from "../PageTitle/PageTitle";

class MusicPage extends React.Component {
    render() {
        return(
            <div>
                <PageTitle text="Музыка"/>
                <MusicList />
            </div>
        );
    }
}

export default MusicPage;