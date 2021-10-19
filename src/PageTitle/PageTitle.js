import React from "react";
import Styles from "./PageTitle.module.css";

class PageTitle extends React.Component {
    render() {
        return (
            <h2 className={Styles.pagetitle}>
                {this.props.text}
            </h2>
        );
    }
}

export default PageTitle;