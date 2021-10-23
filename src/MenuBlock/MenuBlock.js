import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "../MenuItem/MenuItem";
import Styles from "./MenuBlock.module.css";
import DevelopersPage from "../DevelopersPage/DevelopersPage";
import HomePage from "../HomePage/HomePage";
import NewsPage from "../NewsPage/NewsPage";
import DbPage from "../DbPage/DbPage";
import MusicPage from "../MusicPage/MusicPage";


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

    musicPage = () => {
        ReactDOM.render(
            <MusicPage />,
            document.getElementById("main")
        );
    }

    render() {
        return (
            <nav className={Styles.menublock}>
                <MenuItem Text="Главная" clickHandler={this.homePage}/>
                <MenuItem Text="GIF-мемы" clickHandler={this.newsPage}/>
                <MenuItem Text="Команды TI 10" clickHandler={this.dbPage}/>
                <MenuItem Text="Разработчики" clickHandler={this.devPage}/>
                <MenuItem Text="Музыка" clickHandler={this.musicPage}/>
            </nav>
        );
    }
}

export default MenuBlock;