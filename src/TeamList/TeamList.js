import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import Styles from "./TeamList.module.css";

class TeamList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 0,
            teamsCards: [
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/4b/3f/1f/bd/cyberedbff49b420.png" teamName="Evil Genius"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/bf/39/46/80/cyberea854909a70.png" teamName="PSG.LGD"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/6e/e2/74/77/cyberef10fd4af1e.png" teamName="Virtus.PRO"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/13/b3/43/13/cybere3f46c1d31d.png" teamName="Quincy Crew"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/52/04/23/cc/cybere6183a8eb24.png" teamName="Invictus Gaming"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/6c/dd/ae/4f/cybered6b9e0be09.png" teamName="T1"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/01/ca/c9/94/cyberea057b2a223.png" teamName="Team Secret"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/42/dc/2c/39/cybere47d935b779.png" teamName="Vici Gaming"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/76/9e/7e/4b/cybere6b0ed53a3a.png" teamName="Team Aster"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/cf/33/75/9b/cybereab38bd67b5.png" teamName="Alliance"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/67/d3/da/87/cybere4fcfe0d173.png" teamName="Beastcoast"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/96/db/57/4f/cybereebcdfae47f.png" teamName="Thunder Predator"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/a2/56/ff/f1/cyberebb9f611272.png" teamName="Team Spirit"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/f1/76/d6/77/cyberec27e670943.png" teamName="Team Undying"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/c7/ec/9d/1b/cybereebee93335a.png" teamName="SG e-sports"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/f2/07/58/b1/cybere9dc7a8ed81.png" teamName="Fnatic"/>,
                <TeamCard url="https://s5o.ru/storage/simple/cyber/edt/fd/3b/e1/81/cybere5af4604a52.png" teamName="Elephant"/>,
                <TeamCard url="https://r5d4b7t7.stackpathcdn.com/wp-content/themes/og/dist/images/og_logo_2020.png" teamName="OG"/>,
            ]
        }
    }

    prevClick = () => {
        let newVal = this.state.pageNumber - 1;
        if (newVal < 0)
            newVal = 8
        this.setState({pageNumber: newVal});
    }

    nextClick = () => {
        let newVal = this.state.pageNumber + 1;
        if (newVal > 8)
            newVal = 0
        this.setState({pageNumber: newVal});
    }

    render() {
        return(
            <div className={Styles.teamlist}>
                <div onClick={this.prevClick} className={Styles.teamlistbutton}>Prev</div>
                {this.state.teamsCards[this.state.pageNumber * 2]}
                {this.state.teamsCards[this.state.pageNumber * 2 + 1]}
                <div onClick={this.nextClick} className={Styles.teamlistbutton}>Next</div>
                <div className={Styles.teamlistcounter} >{this.state.pageNumber + 1}/9</div>
            </div>
            
        );
    }
}

export default TeamList;