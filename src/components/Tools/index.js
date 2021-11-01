import React from "react";

import './index.css';

import DrawList from "../DrawList";
import DrawColor from "../DrawColor";
import DrawBorder from "../DrawBorder";
import BorderColor from "../BorderColor";

export default class Tools extends React.Component{
    upDate=(e)=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("是否刷新？")){
            // eslint-disable-next-line no-unused-expressions
            this.props.isClear(true);
        }
    };
    toPre=(e)=>{
        this.props.isPre(true);
    };
    toBack=(e)=>{
        this.props.isBack(true);
    };
    render() {
        return (
            <form className={"tools"}>
                <DrawList change={this.props.submit1}/>
                <DrawColor change={this.props.submit2}/>
                <DrawBorder change={this.props.submit3}/>
                <BorderColor change={this.props.submit5}/>
                <input type="button" onClick={this.toPre}  value={"上一步"}/>
                <input type="button" onClick={this.toBack} value={"下一步"}/>
                <input type="button" onClick={this.upDate} value={"刷新"}/>
            </form>
        );
    }
}