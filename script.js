var colorCircles = [];

colorCircles[0]=document.getElementById("red");
colorCircles[1]=document.getElementById("green");
colorCircles[2]=document.getElementById("blue");
colorCircles[3]=document.getElementById("cyan");
colorCircles[4]=document.getElementById("magenta");
colorCircles[5]=document.getElementById("olive");
colorCircles[6]=document.getElementById("purple");
colorCircles[7]=document.getElementById("black");
colorCircles[8]=document.getElementById("tomato");
colorCircles[9]=document.getElementById("hotpink");
colorCircles[10]=document.getElementById("maron");
colorCircles[11]=document.getElementById("yellow");

var list = document.getElementById("list");
list.addEventListener("click", pick);

var TargetColor="red";
colorCircles[0].style.height="80px";
colorCircles[0].style.width="80px";

function pick(e){
    console.log(e.target.tagName);
    if (e.target.tagName=="LI"){

        if (e.target.id=="red"){
            TargetColor="red"
        }
        else if (e.target.id=="blue"){
            TargetColor="blue"
        }
        else if (e.target.id=="cyan"){
            TargetColor="cyan"
        }
        else if (e.target.id=="tomato"){
            TargetColor="tomato"
        }
        else if (e.target.id=="magenta"){
            TargetColor="magenta"
        }
        else if (e.target.id=="green"){
            TargetColor="green"
        }
        else if (e.target.id=="purple"){
            TargetColor="purple"
        }
        else if (e.target.id=="black"){
            TargetColor="black"
        }
        else if (e.target.id=="hotpink"){
            TargetColor="hotpink"
        }
        else if (e.target.id=="olive"){
            TargetColor="olive"
        }
        else if (e.target.id=="maron"){
            TargetColor="maron"
        }
        else if (e.target.id=="yellow"){
            TargetColor="yellow"
        }
        for(var i=0; i<=11; i++){
            colorCircles[i].style.height ="50px";
            colorCircles[i].style.width ="50px";
        }
        e.target.style.height ="80px";
        e.target.style.width ="80px";
    }
}

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", draw);

function draw(e){
    if (e.which==1){
        canvasContext.fillStyle = TargetColor;
        canvasContext.beginPath();
        canvasContext.arc(e.offsetX, e.offsetY, 10, 0, 2, Math.PI*2);
        canvasContext.fill();
    }
}

function clearCanvas()
{
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}