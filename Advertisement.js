setInterval(()=>{["ytp-ad-overlay-close-button","ytp-ad-skip-button"].map(e=>Array.from(document.getElementsByClassName(e))).flat().forEach(e=>e.click())},30);

const newStyle = document.createElement("style");
newStyle.innerText = ".ytp-ad-overlay-container{display:none!important;}
.adsbygoogle{position:absolute;left:-1000px;top:-1500px;}";
document.getElementsByTagName("head").item(0).appendChild(newStyle);
