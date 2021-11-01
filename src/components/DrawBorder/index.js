import React from "react";

import './index.css';
export default class DrawBorder extends React.Component{
    render() {
        return(
            <select name="borders" id="3" onChange={this.props.change}>
                <option value="2">图形边框</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select>
        );
    }
}