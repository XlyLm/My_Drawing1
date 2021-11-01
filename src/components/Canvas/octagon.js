const octagon=function(){}
octagon.prototype.draw=function(obj,firstX,firstY,lastX,lastY,width,height){
    obj.location.push({x:firstX+width/3,y:firstY});

    obj.location.push({x:lastX-width/3,y:firstY});

    obj.location.push({x:lastX,y:firstY+height/3});

    obj.location.push({x:lastX,y:lastY-height/3});

    obj.location.push({x:lastX-width/3,y:lastY});

    obj.location.push({x:firstX+width/3,y:lastY});

    obj.location.push({x:firstX,y:lastY-height/3});

    obj.location.push({x:firstX,y:firstY+height/3});
}

export default octagon;