var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var emsg = document.getElementById("errormsg");
var output = document.getElementById("output");
var m = true;

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
  var code = jsQR(imageData.data, imageData.width, imageData.height)
  if (code) {
    drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
    drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
    drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
    drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
    output.innerText = "data:" + code.data;
  } else {
    output.innerText = "nodata";
  }
  setTimeout(check,100);
}
