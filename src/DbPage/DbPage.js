import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import TeamCard from "../TeamCard/TeamCard";
import TeamList from "../TeamList/TeamList";
import Video from "../Video/Video";

class DbPage extends React.Component {

    render() {
        return(
            <div>
                <PageTitle text="Команды TI 10"/>
                <p>
                    Все команды и велеколепный тизер можно посмотреть в видео ниже. Так отдельно представлен список команд. Его можно найти под тизером.
                </p>
                <Video url="https://www.youtube.com/embed/J9mdL7ZrtIs" />
                <TeamList />
            </div>
        );
    }

}

export default DbPage;