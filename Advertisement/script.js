if(location.host == "www.youtube.com"){
  setInterval(()=>{
    var element = document.querySelector(".ytp-ad-skip-button");
    if(element){
      element.click();
    }
  },30);
}

var AdvertisementBlock = document.querySelectorAll(".adsbygoogle,.ytp-ad-overlay-container");
AdvertisementBlock.forEach(function(e) {
  e.style = "display:none !important;";
});

alert("広告ブロック🚫！\nby suisotaro");
