import React from "react";

class DevInfo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    {this.props.Name}
                </div>
                <div>
                    {this.props.Bio}
                </div>
            </div>
        );
    }
}

export default DevInfo;