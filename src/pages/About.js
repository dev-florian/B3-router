import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

class About extends Component {
    render() {
        return (
            <div className="About">
                <h1>About</h1>
                <Link to={`${this.props.match.url}/0`}>Une page de dingue </Link>
                <Link to={`${this.props.match.url}/1`}>Une page de dingue </Link>
                <Route path={`${this.props.match.url}/:id`} component={Detail} />
            </div>
        );
    }
}

export default About;
