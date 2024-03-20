import React from 'react';
import ClassAbout from './ClassAbout';

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("parent constructor")
    }
    render() {
        console.log("parent-render")
        return (
            <>

                <div>About component</div>
                <ClassAbout name={"child1"} />
                <ClassAbout name={"child2"} /> {/* Render an instance of ClassAbout */}

            </>
        )
    }
}
export default About;

