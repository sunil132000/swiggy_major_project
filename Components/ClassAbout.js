import { setIn } from "formik";
import React from "react";

class ClassAbout extends React.Component {

    constructor(props) {
        super(props)
        console.log("child constructor" + this.props.name)
        this.state = {
            count: 0,
            count2: 0,
            userInfo: 0,
        }
    }
    componentDidMount() {

        this.timer = setInterval(() => {
            console.log("namste react op");
        }, 1000);
        console.log("componentDidMount" + this.props.name)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("componentDidUnmount" + this.props.name)

    }

    render() {
        console.log("child render " + this.props.name)
        return (
            <>
                <h1>{this.props.name} component</h1>
                <img alt="" src={this.state.userInfo.avatar_url} />

            </>

        )
    }
}
export default ClassAbout;