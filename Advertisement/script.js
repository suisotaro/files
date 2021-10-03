if(location.host == "www.youtube.com"){
  setInterval(()=>{
    var element = document.querySelector(".ytp-ad-skip-button");
    if(element){
      element.click();
    }
  },30);
}

const newStyle = document.createElement("style");

if(confirm("強力版？")){
  newStyle.innerText = ".adsbygoogle,.ytp-ad-overlay-container{display:none !important;}";
  alert("強力広告ブロック🚫！\nby suisotaro");
} else{
  newStyle.innerText = "*[class*="ads"],.ytp-ad-overlay-container{display:none !important;}";
  alert("広告ブロック🚫！\nby suisotaro");
}

document.getElementsByTagName("head")[0].appendChild(newStyle);
