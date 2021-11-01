import React from "react";

import './index.css';
export default class DrawBorder extends React.Component{
    render() {
        return(
            <select name="bColors" id="5" onChange={this.props.change}>
                <option value="bBlack">边框颜色</option>
                <option value="bBlue">blue</option>
                <option value="bRed">red</option>
                <option value="bPink">pink</option>
                <option value="bYellow">yellow</option>
                <option value="bGreen">green</option>
            </select>
        );
    }
}