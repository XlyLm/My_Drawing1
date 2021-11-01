import './App.css';
import React from "react";

import Tools from './components/Tools';
import Canvas from './components/Canvas';

class App extends React.Component{
    state={
        str:{
            dKinds:'dKind',
            dColors:'dBlack',
            borders:2,
            bColors:'bBlack'
        },
        clear:false,
        pre:false,
        back:false
    };
    isClear=(TF)=>{
        this.setState({clear:TF});
    };
    isPre=(TF)=>{
        this.setState({pre:TF});
    };
    isBack=(TF)=>{
        this.setState({back:TF});
    };
    submit1=(e)=>{
        this.setState({str:{...this.state.str,dKinds:e.target.value}});
    };
    submit2=(e)=>{
        this.setState({str:{...this.state.str,dColors:e.target.value}});
    };
    submit3=(e)=>{
        this.setState({str:{...this.state.str,borders:e.target.value}});
    };
    submit5=(e)=>{
        this.setState({str:{...this.state.str,bColors:e.target.value}});
    };
    render() {
        return (
            <div className="App">
                <h1>图形绘画工具</h1>
                <hr/>
                <Tools submit1={this.submit1} submit2={this.submit2} submit3={this.submit3}
                       submit5={this.submit5} {...this.state.str} isClear={this.isClear}
                       isPre={this.isPre} isBack={this.isBack}/>
                <Canvas {...this.state.str} clear={this.state.clear} isClear={this.isClear}
                        pre={this.state.pre} back={this.state.back} isPre={this.isPre}
                        isBack={this.isBack}/>
            </div>
        );
    };
}

export default App;
