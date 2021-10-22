var x = document.createElement('script');
x.src = 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js';
document.getElementsByTagName('head')[0].appendChild(x);
var suisotaroitems;
x.onload = function () {
  suisotaroitems = function () {
    swal("suisotaro items", {
      buttons: {
        AdsBlock: "広告ブロック",
        PageEdit: "PageEdit",
        popup: "popup"
      },
    }).then((value) => {
      switch (value) {
      case "AdsBlock":
        if (location.host == "www.youtube.com") {
          setInterval(() => {
            var element = document.querySelector(".ytp-ad-skip-button");
            if (element) {
              element.click();
            }
          }, 30);
        }
        var newStyle = document.createElement("style");
        newStyle.innerText = `
.ytp-ad-overlay-container,*[id*="ads"],*[name*="ads"],*[class*="ads"]{display:none !important;}
.drag-and-drop{text-align:center;background:#f99;border:solid 3px#f55;top:10px;left:10px;width:200px;height:100px;cursor:move;position:absolute;z-index:1000}.drag{z-index:1001}
`;
        document.getElementsByTagName("head")[0].appendChild(newStyle);
        swal("広告ブロック🚫！\nAdsBlock by suisotaro", {
          icon: "success",
        });

        var newdiv = document.createElement("div");
        newdiv.innerHTML = '<p>ドラッグで動かせます<br><mark>広告ブロック中！</mark><br>広告ブロック by suisotaro</p>';
        newdiv.className = "drag-and-drop";
        document.body.appendChild(newdiv);

(function(){var f=document.getElementsByClassName("drag-and-drop");var a,g;for(var d=0;d<f.length;d++){f[d].addEventListener("mousedown",c,!1);f[d].addEventListener("touchstart",c,!1)}function c(i){this.classList.add("drag");if(i.type==="mousedown"){var h=i}else{var h=i.changedTouches[0]}a=h.pageX-this.offsetLeft;g=h.pageY-this.offsetTop;document.body.addEventListener("mousemove",e,!1);document.body.addEventListener("touchmove",e,!1)}function e(j){var h=document.getElementsByClassName("drag")[0];if(j.type==="mousemove"){var i=j}else{var i=j.changedTouches[0]}j.preventDefault();h.style.top=i.pageY-g+"px";h.style.left=i.pageX-a+"px";h.addEventListener("mouseup",b,!1);document.body.addEventListener("mouseleave",b,!1);h.addEventListener("touchend",b,!1);document.body.addEventListener("touchleave",b,!1)}function b(i){var h=document.getElementsByClassName("drag")[0];document.body.removeEventListener("mousemove",e,!1);h.removeEventListener("mouseup",b,!1);document.body.removeEventListener("touchmove",e,!1);h.removeEventListener("touchend",b,!1);h.classList.remove("drag")}})();

        break;
      case "PageEdit":
        swal("編集は？", {
          buttons: {
            on: "可能にする",
            off: "不可能にする"
          }
        }).then((value) => {
          switch (value) {
          case "on":
            swal("編集可能にしました！\nPageEdit by suisotaro", {
              icon: "success",
            });
            document.body.contentEditable = "true";
            document.designMode = "on";
            break;
          case "off":
            swal("編集不可能にしました！\nPageEdit by suisotaro", {
              icon: "success",
            });
            document.body.contentEditable = "false";
            document.designMode = "off";
            break;
          }
        });
        break;
      case "popup":
        var x = 0,
          y = 0,
          win = [];
        for (var j = 1; j < 4; j++) {
          x = 0;
          for (var i = 0; i < 20; i++) {
            x += 10;
            y += 10;
            win.push(window.open("", "win" + j + i, `width=400,height=100,top=${x},left=${y}`));
          }
          y += 50;
        }
        setTimeout(() => {
          win.forEach(w => {
            w.close();
          });
        }, 3000);
        break;
      default:
        swal("error!");
      }
    })
  }
  suisotaroitems();
}
