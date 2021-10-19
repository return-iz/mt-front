import React from "react";
import Styles from "./MenuItem.module.css";

class MenuItem extends React.Component {

    render() {
        return(
            <div className={Styles.menuitem} onClick={this.props.clickHandler}>
                {this.props.Text}
            </div>
        );
    }
}

export default MenuItem;