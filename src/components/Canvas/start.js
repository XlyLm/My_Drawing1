const start=function(){}
start.prototype.draw=function(obj,firstX,firstY,lastX,lastY,width,height){
    obj.location.push({x:firstX,y:firstY});

    obj.location.push({x:lastX,y:firstY});

    obj.location.push({x:lastX-5*width/6,y:lastY});

    obj.location.push({x:lastX-width/2,y:firstY-height/2});

    obj.location.push({x:lastX-width/6,y:lastY});
}

export default start;