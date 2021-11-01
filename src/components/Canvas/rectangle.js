const rectangle=function(){}
rectangle.prototype.draw=function(obj,firstX,firstY,lastX,lastY,width,height){
    obj.location.push({x:firstX,y:firstY});

    obj.location.push({x:lastX,y:firstY});

    obj.location.push({x:lastX,y:lastY});

    obj.location.push({x:firstX,y:lastY});
}

export default rectangle;