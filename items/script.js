try {
  suisotaroitems()
} catch (e) {
  var x = document.createElement('script');
  x.src = 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js';
  document.getElementsByTagName('head')[0].appendChild(x);
  x.onload = function () {
    var suisotaroitems = function () {
      swal("suisotaro items", {
        buttons: {
          AdsBlock: "広告ブロック",
          PageEdit: "PageEdit",
          popup: "popup"
        },
      }).then((value) => {
        switch (value) {
        case "AdsBlock":
          var AdsBlock = AdsBlock | !1;
          if (!AdsBlock) {
            if (location.host == "www.youtube.com") {
              setInterval(() => {
                var element = document.querySelector(".ytp-ad-skip-button");
                if (element) {
                  element.click()
                }
              }, 30)
            }
            var newStyle = document.createElement("style");
            newStyle.innerText = ".adsbygoogle,.ytp-ad-overlay-container{display:none !important;}";
            document.getElementsByTagName("head")[0].appendChild(newStyle);
            AdsBlock = !0;
            swal("広告ブロック🚫！\nAdsBlock by suisotaro")
          } else {
            var newStyle = document.createElement("style");
            newStyle.innerText = '*[id*="ads"],*[name*="ads"],*[class*="ads"]{display:none !important;}';
            document.getElementsByTagName("head")[0].appendChild(newStyle);
            swal("強力広告ブロック🚫しました！\nAdsBlock by suisotaro")
          }
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
              break
            }
          });
          break;
        case "popup":
          var x = 0,
            y = 0,
            win = [];
          for (var j = 1; j < 3; j++) {
            x = 0;
            for (var i = 0; i < 20; i++) {
              x += 10;
              y += 10;
              win.push(window.open("", "win" + j + i, `width=400,height=100,top=${x},left=${y}`))
            }
            y += 100
          }
          setTimeout(() => {
            win.forEach(w => {
              w.close()
            })
          }, 3000);
          break;
        case "d":
          swal("d");
          break;
        default:
          swal("error!")
        }
      })
    }
    suisotaroitems()
  }
}
