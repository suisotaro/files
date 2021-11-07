var x = document.createElement('script');
x.src = 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js';
document.getElementsByTagName('head')[0].appendChild(x);
var suisotaroitems;
x.onload = function () {
  swal({
    title: "警告",
    text: "これを使用したことでBANされたなどのことの責任は受け付けません。",
    icon: "warning",
    buttons: true,
  }).then((value) => { if(value){
  suisotaroitems = function () {
    swal("suisotaro items", {
      buttons: {
        AdsBlock: "広告ブロック",
        PageEdit: "PageEdit",
        popup: "popup",
        Keyboard: "キーボード",
        renda: "連打！",
        shortestURL: "URL短縮"
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
        newStyle.innerText = '.ytp-ad-overlay-container,*[id*="ads"],*[name*="ads"],*[class*="ads"]{display:none !important;}';
        document.getElementsByTagName("head")[0].appendChild(newStyle);
        swal("広告ブロック🚫！\nAdsBlock by suisotaro", {
          icon: "success",
        });
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
      case "Keyboard": 
var e=document.createElement("style");e.innerText=`.drag-and-drop{top:10px;left:10px;cursor:move;position:absolute;z-index:1000;width:700px;}.drag-and-drop p,#renda{text-align:center;background:#f99;}.drag{z-index:1001}`;document.getElementsByTagName("head")[0].appendChild(e);e=document.createElement("div");e.innerHTML='<p id="messagetext">このキーボードはドラッグで動かすことができます。 Keyboard by suisotaro</p><div class="simple-keyboard"></div>';e.className="drag-and-drop";document.body.appendChild(e);(function(){var f=document.getElementsByClassName("drag-and-drop");var a,g;for(var d=0;d<f.length;d++){f[d].addEventListener("mousedown",c,!1);f[d].addEventListener("touchstart",c,!1)}function c(i){this.classList.add("drag");if(i.type==="mousedown"){var h=i}else{var h=i.changedTouches[0]}a=h.pageX-this.offsetLeft;g=h.pageY-this.offsetTop;document.body.addEventListener("mousemove",e,!1);document.body.addEventListener("touchmove",e,!1)}function e(j){var h=document.getElementsByClassName("drag")[0];if(j.type==="mousemove"){var i=j}else{var i=j.changedTouches[0]}j.preventDefault();h.style.top=i.pageY-g+"px";h.style.left=i.pageX-a+"px";h.addEventListener("mouseup",b,!1);document.body.addEventListener("mouseleave",b,!1);h.addEventListener("touchend",b,!1);document.body.addEventListener("touchleave",b,!1)}function b(i){var h=document.getElementsByClassName("drag")[0];document.body.removeEventListener("mousemove",e,!1);h.removeEventListener("mouseup",b,!1);document.body.removeEventListener("touchmove",e,!1);h.removeEventListener("touchend",b,!1);h.classList.remove("drag")}})();e=document.createElement("link");e.rel="stylesheet";e.href='https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css';document.getElementsByTagName("head")[0].appendChild(e);e=document.createElement("script");e.src='https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.js';document.getElementsByTagName("head")[0].appendChild(e);e.onload=()=>{let Keyboard=window.SimpleKeyboard.default;let keyboard=new Keyboard({onChange:input=>onChange(input),onKeyPress:button=>onKeyPress(button),layoutName:"default",layout:{default:["{change} ` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} q w e r t y u i o p [ ] \\","{capslock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}","{space}"],shift:["{change} ~ ! @ # $ % ^ & * ( ) _ + {backspace}","{tab} Q W E R T Y U I O P { } |",'{capslock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}","{space}"],change:["ArrowUp","ArrowLeft ArrowDown ArrowRight","{change} {space}"]},display:{"ArrowUp":"↑","ArrowLeft":"←","ArrowDown":"↓","ArrowRight":"→","{space}":"space","{shift}":"shift","{tab}":"tab ⇥","{backspace}":"backspace ⌫","{enter}":"enter ↵","{shift}":"shift ⇧","{change}":"変更","{capslock}":"Caps Lock"}});function onChange(input){} function onKeyPress(button){var key=button;if(button=="{space}")key=" ";document.execCommand('insertText',!1,key);console.log("Button pressed",button);document.dispatchEvent(new KeyboardEvent("keydown",{key:key}));document.dispatchEvent(new KeyboardEvent("keypress",{key:key}));setTimeout(()=>{console.log("Button up",button);document.dispatchEvent(new KeyboardEvent("keyup",{key:key}))},200);if(button==="{shift}"||button==="{capslock}")handleShift();else if(button==="{change}")handleChange()} function handleShift(){let currentLayout=keyboard.options.layoutName;let shiftToggle=currentLayout==="default"?"shift":"default";keyboard.setOptions({layoutName:shiftToggle})} function handleChange(){let currentLayout=keyboard.options.layoutName;let changeToggle=currentLayout==="change"?"default":"change";keyboard.setOptions({layoutName:changeToggle})}}
        swal("OK!\nKeyboard by suisotaro", {
          icon: "success",
        });
        break;
      case "renda":
        var e=document.createElement("style");e.innerText=`.drag-and-drop{top:10px;left:10px;cursor:move;position:absolute;z-index:1000;width:700px;background:#f99}#rendatext{text-align:center;background:#99f;}.drag{z-index:1001}`;document.getElementsByTagName("head")[0].appendChild(e);e=document.createElement("div");e.innerHTML=`打つキー:<input type="text" id="rendakey" size="70" value="abcdefghijklmnopqrstuvwxyz0123456789?!- "><button onclick="renda(document.getElementById('rendakey').value);">連打！</button><p id="rendatext"></p>`;e.className="drag-and-drop";document.body.appendChild(e);(function(){var f=document.getElementsByClassName("drag-and-drop");var a,g;for(var d=0;d<f.length;d++){f[d].addEventListener("mousedown",c,!1);f[d].addEventListener("touchstart",c,!1)}function c(i){this.classList.add("drag");if(i.type==="mousedown"){var h=i}else{var h=i.changedTouches[0]}a=h.pageX-this.offsetLeft;g=h.pageY-this.offsetTop;document.body.addEventListener("mousemove",e,!1);document.body.addEventListener("touchmove",e,!1)}function e(j){var h=document.getElementsByClassName("drag")[0];if(j.type==="mousemove"){var i=j}else{var i=j.changedTouches[0]}j.preventDefault();h.style.top=i.pageY-g+"px";h.style.left=i.pageX-a+"px";h.addEventListener("mouseup",b,!1);document.body.addEventListener("mouseleave",b,!1);h.addEventListener("touchend",b,!1);document.body.addEventListener("touchleave",b,!1)}function b(i){var h=document.getElementsByClassName("drag")[0];document.body.removeEventListener("mousemove",e,!1);h.removeEventListener("mouseup",b,!1);document.body.removeEventListener("touchmove",e,!1);h.removeEventListener("touchend",b,!1);h.classList.remove("drag")}})();window.renda=function(key){key=key.split('');document.getElementById("rendatext").innerText=key+"で連打機能中！";clearInterval(window.rendainter);window.rendainter=setInterval(()=>{for(i=0;i<key.length;i++){document.dispatchEvent(new KeyboardEvent("keydown",{key:key[i]}));document.dispatchEvent(new KeyboardEvent("keyup",{key:key[i]}))}},1)}
        swal("OK!\n連打キーボード by suisotaro", {
          icon: "success",
        });
        break;
      case "shortestURL":
        var d = new Date();
        d = ('00'+d.getDate()).slice(-2);
        fetch(`https://script.google.com/macros/s/AKfycbzQ-y1-v9GIozewAM2ivQ19VJHBxUtrIqT3apm-vrGmt4wJlDbmiVPm_z0FN3DgQtDhsg/exec?url=${location.href}&d=${d}`)
  .then((response) => response.text())
  .then((text) => swal(text, {icon: "success"}))
  .catch((error) => swal(error, {icon: "error"}));
        break;
      default:
        swal("error!");
      }
    })
  }
  suisotaroitems();
  }});
}
