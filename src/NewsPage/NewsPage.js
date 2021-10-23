import React from "react";
import MemesBlock from "../MemesBlock/MemesBlock";
import PageTitle from "../PageTitle/PageTitle";

class NewsPage extends React.Component {

    render() {
        return(
            <div>
                <PageTitle text="Мемы"/>
                <MemesBlock />
            </div>
        );
    }

}

export default NewsPage;