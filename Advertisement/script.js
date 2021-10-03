if(location.host == "www.youtube.com"){
  setInterval(()=>{
    var element = document.querySelector(".ytp-ad-skip-button");
    if(element){
      element.click();
    }
  },30);
}

const newStyle = document.createElement("style");
newStyle.innerText = ".adsbygoogle,.ytp-ad-overlay-container{display:none !important;}";
document.getElementsByTagName("head")[0].appendChild(newStyle);

alert("広告ブロック🚫！\nby suisotaro");
