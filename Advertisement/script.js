try{
  AdvertisementBlock;
} catch{
  AdvertisementBlock = false;
}
if(!AdvertisementBlock){
  if(location.host == "www.youtube.com"){
    setInterval(()=>{
      var element = document.querySelector(".ytp-ad-skip-button");
      if(element){
        element.click();
      }
    },30);
  }

  document.querySelectorAll(".adsbygoogle,.ytp-ad-overlay-container").forEach(function(e) {
    e.style = "display:none !important;";
  });
  
  AdvertisementBlock = true;
  
  alert("広告ブロック🚫！\nby suisotaro");
} else {
  document.querySelectorAll('*[id*="ads"],*[name*="ads"],*[class*="ads"]').forEach(function(e) {
    e.style = "display:none !important;";
  });
  alert("強力広告ブロック🚫しました！\nby suisotaro");
}

