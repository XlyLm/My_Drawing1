import React from "react";

import './index.css';
export default class DrawColor extends React.Component{
    render() {
        return (
            <select name="dColors" id="2"  onChange={this.props.change}>
                <option value="dBlack">图形颜色</option>
                <option value="dBlue">blue</option>
                <option value="dRed">red</option>
                <option value="dPink">pink</option>
                <option value="dYellow">yellow</option>
                <option value="dGreen">green</option>
            </select>
        );
    }
}