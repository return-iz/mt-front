import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "../MenuItem/MenuItem";
import Styles from "./MenuBlock.module.css";
import DevelopersPage from "../DevelopersPage/DevelopersPage";
import HomePage from "../HomePage/HomePage";
import NewsPage from "../NewsPage/NewsPage";
import DbPage from "../DbPage/DbPage";

class MenuBlock extends React.Component {

    homePage = () => {
        ReactDOM.render(
            <HomePage />,
            document.getElementById("main")
        );
    }

    newsPage = () => {
        ReactDOM.render(
            <NewsPage />,
            document.getElementById("main")
        );
    }

    dbPage = () => {
        ReactDOM.render(
            <DbPage />,
            document.getElementById("main")
        );
    }

    devPage = () => {
        ReactDOM.render(
            <DevelopersPage />,
            document.getElementById("main")
        );
    }

    

    render() {
        return (
            <nav className={Styles.menublock}>
                <MenuItem Text="Главная" clickHandler={this.homePage}/>
                <MenuItem Text="Новости" clickHandler={this.newsPage}/>
                <MenuItem Text="Базы данных" clickHandler={this.dbPage}/>
                <MenuItem Text="Разработчики" clickHandler={this.devPage}/>
            </nav>
        );
    }
}

export default MenuBlock;