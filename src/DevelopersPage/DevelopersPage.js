import React from "react";
import DevBlock from "../DevBlock/DevBlock";
import PageTitle from "../PageTitle/PageTitle";
import Styles from "./DevelopersPage.module.css";

class DevelopersPage extends React.Component {
    render() {
        return (
            <div className={Styles.developerspage}>
                <PageTitle text="Разработчики"/>
                <DevBlock/>
            </div>
        );
    }
}

export default DevelopersPage;