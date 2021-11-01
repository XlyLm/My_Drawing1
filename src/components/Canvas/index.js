import React from "react";

import './index.css';
import father from './father';
import triangle from './triangle';
import rectangle from './rectangle';
import ellipse from './ellipse';
import start from './start';
import octagon from './octagon';
import rubber from './rubber';

export default class Canvas extends React.Component{
    state={
        TF:false,
        first:{
            x:0,
            y:0
        },
        drawList:[],
        str:[],
        last:null
    };
    enterDraw=(e)=>{
        if(this.props.clear){
            this.setState({drawList:[],str:[]});
            this.props.isClear(false);
            this.setState({last:null});
        }
        let obj;
        let flag;
        if(this.props.pre){
            obj=this.state.drawList.pop();
            if(obj!==undefined){
                // eslint-disable-next-line no-unused-vars
                flag=obj.type;
            }
            while(obj!==undefined){
                this.state.str.push(obj);
                obj=this.state.drawList.pop();
                if(obj===undefined){
                    break;
                }else if((obj.type===flag&&flag!==2)||obj.type!==flag){
                    this.state.drawList.push(obj);
                    break;
                }
            }
            this.props.isPre(false);
        }
        if(this.props.back){
            obj=this.state.str.pop();
            if(obj!==undefined){
                // eslint-disable-next-line no-unused-vars
                flag=obj.type;
            }
            while(obj!==undefined){
                this.state.drawList.push(obj);
                obj=this.state.str.pop();
                if(obj===undefined){
                    break;
                }else if((obj.type===flag&&flag!==2)||obj.type!==flag){
                    this.state.str.push(obj);
                    break;
                }
            }
            this.props.isBack(false);
        }
        setTimeout(()=>this.draw(e,1),100);
    };
    startDraw=(e)=>{
        if(this.props.dKinds!=='dKind'){
            this.setState({first:{x:e.pageX-e.target.offsetLeft,y:e.pageY-e.target.offsetTop},TF:true});
        }
    };
    moveDraw=(e)=>{
        if(this.state.TF) {
            const lastDraw={type:0,fillStyle:'',strokeStyle:'',lineWidth:0,location:[]};
            switch (this.props.dKinds) {
                case 'triangle':
                    father(e, this, lastDraw, new triangle());
                    break;
                case 'rectangle':
                    father(e, this, lastDraw, new rectangle());
                    break;
                case 'ellipse':
                    father(e, this, lastDraw, new ellipse());
                    break;
                case 'start':
                    father(e, this, lastDraw, new start());
                    break;
                case 'octagon':
                    father(e, this, lastDraw, new octagon());
                    break;
                case 'rubber':
                    rubber(e, this, lastDraw);
                    break;
                default:;
            }
            if(this.state.str[this.state.str.length-1]!==undefined){
                // eslint-disable-next-line no-restricted-globals
                if(confirm("将清除之前回退的操作？？")){
                    this.setState({str:[]});
                    this.state.drawList.push(lastDraw);
                    this.draw(e,0);
                }
            }
            if(this.state.str[this.state.str.length-1]===undefined){
                this.state.drawList.push(lastDraw);
                this.draw(e,0);
            }
        }
    };
    endDraw=(e)=>{
        this.setState({TF:false});
        if(this.state.last!==null){
            this.state.drawList.push(this.state.last);
        }
        this.draw(e,1);
        this.setState({last:null});
    };
    draw=(e,flag)=>{
        const cxt=e.target.getContext("2d");
        cxt.clearRect(0,0,e.target.width,e.target.height);

        this.state.drawList.forEach((item,index) => {
            cxt.beginPath();
            cxt.fillStyle = item.fillStyle;
            cxt.strokeStyle = item.strokeStyle;
            cxt.lineWidth = item.lineWidth;
            if (item.type === 0) {
                item.location.forEach((item2, index) => {
                    if (index === 0) {
                        cxt.moveTo(item2.x, item2.y);
                    } else {
                        cxt.lineTo(item2.x, item2.y);
                    }
                });
                cxt.closePath();
            }else if(item.type === 1||item.type === 2){
                cxt.ellipse(item.location[0].x, item.location[0].y, item.location[1].x,
                    item.location[1].y, 0, 0, Math.PI * 2);
            }
            cxt.stroke();
            cxt.fill();
        });
        if(flag===0){
            let obj=this.state.drawList.pop();
            if(obj.type!== 2){
                this.setState({last:obj});
            }else{
                obj.strokeStyle='white';
                this.state.drawList.push(obj);
            }
        }
    };
    render() {
        return (
            <canvas onMouseDown={this.startDraw} onMouseUp={this.endDraw}
                    onMouseMove={this.moveDraw} onMouseLeave={this.endDraw}
                    onMouseEnter={this.enterDraw} width="500" height="320"></canvas>
        );
    }
}