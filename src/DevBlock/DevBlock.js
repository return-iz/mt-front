import React from "react";
import DevCard from "../DevCard/DevCard";
import Styles from "./DevBlock.module.css";

class DevBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null, 
            isLoaded: false, 
            devs: []
        }
    }

    componentDidMount() {
        fetch("http://5.129.54.131:8080/dev")
            .then(res => res.json())
            .then(
                res => {
                    this.setState({
                        isLoaded: true,
                        devs: res
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, devs } = this.state;
        if (error) {
            return <div>ERROR: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>It is not loaded</div>;
        }
        else {
            return(
                <div className={Styles.devblock}>
                    {devs.map(dev => {
                        return <DevCard Name={dev.name} Bio={dev.bio} Url={dev.url}/>;
                    })}
                </div>
            );
        }
        
    }
}

export default DevBlock;