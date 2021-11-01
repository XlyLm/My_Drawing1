import React from "react";

import './index.css';
export default class DrawList extends React.Component{
    render() {
        return (
            <select name="dKinds" id="1" onChange={this.props.change}>
                <option value="dKind">图形类型</option>
                <option value="triangle">triangle</option>
                <option value="rectangle">rectangle</option>
                <option value="ellipse">ellipse</option>
                <option value="start">start</option>
                <option value="octagon">octagon</option>
                <option value="rubber">橡皮擦</option>
            </select>
        );
    }
}