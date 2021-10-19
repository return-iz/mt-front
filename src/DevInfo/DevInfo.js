import React from "react";

class DevInfo extends React.Component {
    render() {
        return(
            <div>
                <p>
                    {this.props.Name}
                </p>
                <p>
                    {this.props.Bio}
                </p>
            </div>
        );
    }
}

export default DevInfo;