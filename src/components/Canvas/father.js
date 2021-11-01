export default function father(e,that,obj,childObj){
    const firstX=that.state.first.x;
    const firstY=that.state.first.y;
    const lastX=e.pageX-e.target.offsetLeft;
    const lastY=e.pageY-e.target.offsetTop;
    const width=lastX-firstX;
    const height=lastY-firstY;

    const cxt=e.target.getContext("2d");

    cxt.fillStyle=that.props.dColors.slice(1).toLowerCase();
    cxt.lineWidth=parseInt(that.props.borders);
    cxt.strokeStyle=that.props.bColors.slice(1).toLowerCase();

    obj.fillStyle=cxt.fillStyle;
    obj.lineWidth=cxt.lineWidth;
    obj.strokeStyle=cxt.strokeStyle;

    return childObj.draw(obj,firstX,firstY,lastX,lastY,width,height);
}