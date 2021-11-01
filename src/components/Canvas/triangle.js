const triangle=function(){}
triangle.prototype.draw=function(obj,firstX,firstY,lastX,lastY,width,height){
    obj.location.push({x:firstX,y:lastY});

    obj.location.push({x:lastX-width/2,y:firstY});

    obj.location.push({x:lastX,y:lastY});
}

export default triangle;