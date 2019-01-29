import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import VeryFunny from "./Veryfunny";

class Fun extends Component {
    render() {
        return (
            <div className="Fun">
               <h1>Fun</h1>
                <Link to={`${this.props.match.url}/very-funny`}>Une page de dingue </Link>
                <Route path={`${this.props.match.url}/very-funny`} component={VeryFunny} />
            </div>
        );
    }
}

export default Fun;