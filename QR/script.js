var popup={};popup.open=(a,b)=>{popup.titleE.innerText=a;popup.bodyE.innerHTML=b;popup.alertE.hidden=false};popup.close=()=>{popup.alertE.hidden=true};popup.f=(e,s=null)=>{var E=document.createElement(e);E.style=s;return E};popup.alertE=document.createElement("div");popup.alertE.hidden=true;popup.alertE.style="position:fixed;left:0;top:0;width:100%;height:100%;zIndex:9999;background-Color:#fff;opacity:90%;text-Align:center";document.body.appendChild(popup.alertE);popup.innerE=popup.f("div","position:fixed;width:25pc;height:25pc;border:solid;overflow:auto;left:calc(50% - 200px);top:calc(50% - 200px)");popup.alertE.appendChild(popup.innerE);popup.topE=popup.f("div","height:20%");popup.innerE.appendChild(popup.topE);popup.titleE=popup.f("h1");popup.topE.appendChild(popup.titleE);popup.bottomE=popup.f("div","height:80%");popup.innerE.appendChild(popup.bottomE);popup.bodyE=popup.f("div");popup.bottomE.appendChild(popup.bodyE);popup.buttonE=popup.f("button","display:inline-block;font-size:1em;padding:.3em 1em;text-decoration:none;color:#67c5ff;border:solid 2px #67c5ff;border-radius:transition:.4s");popup.buttonE.onclick=popup.close;popup.buttonE.innerText="CLOSE / 閉じる";popup.bottomE.appendChild(popup.buttonE);

var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var emsg = document.getElementById("errormsg");
var output = document.getElementById("output");
var m = true;

var t = prompt("time?", "100");

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: {
      facingMode: "environment"
    }
  })
  .then(function(stream) {
    emsg.hidden = true;
    canvas.hidden = false;
    video.srcObject = stream;
    video.play();
    if (m) {
      m = false;
      setTimeout(check,500);
    }
  })
  .catch(function(err) {
    console.error(err);
  })

function drawLine(begin, end, color) {
  ctx.beginPath();
  ctx.moveTo(begin.x, begin.y);
  ctx.lineTo(end.x, end.y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.stroke();
}
function check(){
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var code = jsQR(imageData.data, imageData.width, imageData.height);
  if (code) {
    drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
    drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
    drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
    drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
    output.innerText = "data:" + code.data;
    popup.open("QRコードを読み取りました！", code.data);
  } else {
    output.innerText = "nodata";
  }
  setTimeout(check,t);
}
