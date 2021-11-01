const ellipse=function(){}
ellipse.prototype.draw=function(obj,firstX,firstY,lastX,lastY,width,height){
    obj.type=1;
    obj.location.push({x:firstX,y:Math.abs(lastY-height/2)});

    obj.location.push({x:Math.abs(width),y:Math.abs(height)});
}

export default ellipse;