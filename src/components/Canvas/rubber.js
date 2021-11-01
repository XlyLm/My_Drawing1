const rubber=function(e,that,obj){
    obj.type=2;
    const lastX=e.pageX-e.target.offsetLeft;
    const lastY=e.pageY-e.target.offsetTop;

    obj.location.push({x:lastX,y:lastY});
    obj.location.push({x:20,y:20});

    obj.fillStyle='white';
    obj.lineWidth=2;
    obj.strokeStyle='black';
}

export default rubber;