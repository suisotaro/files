const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA8CAYAAAA34qk1AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOqADAAQAAAABAAAAPAAAAAAs615UAAAAHGlET1QAAAACAAAAAAAAAB4AAAAoAAAAHgAAAB4AAAECIb82kwAAAM5JREFUaAXslNEJxDAMQz1td7qdspMvgWsbqCqkzwMFDMF2RP1st6q7LSvtfKauY5rqnTWmvmNlFbmgiMcpcuWKsleaU+TKTaGvnb6Y8ks6OscIQeDYntGM7gSJIGRHs6PPdYEetIfMB0WIE40n82V0M7pknPYQG1MU298qdzamKKZoJicEQiAEQiAEQiAEQiAE/pPAGF2OqVUeR5djqu6Z52ivXKvIBUQ99oeowr88W9/pZgoF3bCJAw3msvXT0ZefFKO8x2zi+2Phbup/AQAA///JunG3AAAArUlEQVTtmFEKhDAMBXNa7+SdvFOXwrqgkO2bv12cQpDW+DCT14JWHcdAUeHYtlEkQtlPGtGeuajICSUd+EVS4Xce1rejjaVT8Jh4KmxHv58Jz9mj0DGmS0ACEpCABCQgAQlI4G8I7PsoEmlhP/eZRoqcuemw0OZfUgrwzMMg7Wizd0+iqysmvhK83cf6dtSO3jzUTLG1Gp1uGetrXa3bmem6jq11fXw5w/oPse4LtniNtZAV2lEAAAAASUVORK5CYII=";

class suisotaroBlocks {
  getInfo() {
    return {
      id: "suisotaroBlocks",
      name: "suisotaroBlocks",
      docsURI: "https://suisotaro.github.io/files/scratch/",
      menuIconURI: icon,
      color1: "#ff4c4c",
      color2: "#e64444",
      blocks: [
        {
          opcode: "sbmodpow",
          blockType: "reporter",
          text: "[a] ^ [b] % [c]",
          arguments: {
            a: {
              type: "number",
              defaultValue: 0
            },
            b: {
              type: "number",
              defaultValue: 0
            },
            c: {
              type: "number",
              defaultValue: 0
            }
          }
        },{
          opcode: "sbif",
          blockType: "reporter",
          text: "[boolean] ? [a] : [b]",
          arguments: {
            boolean: {
              type: "Boolean",
              defaultValue: true
            },
            a: {
              type: "string",
              defaultValue: "a"
            },
            b: {
              type: "string",
              defaultValue: "b"
            }
          }
        },{
          opcode: "sbget",
          blockType: "reporter",
          text: "GET [URL]",
          arguments: {
            URL: {
              type: "string",
              defaultValue: "data:,Hello%2C%20World!"
            }
          }
        },{
          opcode: "sbblob",
          blockType: "reporter",
          text: "blob [TEXT] [MIME]",
          arguments: {
            TEXT: {
              type: "string",
              defaultValue: "サンプル"
            },
            MIME: {
              type: "string",
              defaultValue: "text/plain"
            }
          }
        },{
          opcode: "sbp",
          blockType: "reporter",
          text: "[url] を [type] する",
          arguments: {
            url: {
              type: "string",
              defaultValue: "サンプル"
            },
            type: {
              type: "string",
              defaultValue: "encode",
              menu: "sbpselect"
            }
          }
        },{
          opcode: "sbcalc",
          blockType: "reporter",
          text: "[number1] [operator] [number2]",
          arguments: {
            number1: {
              type: "string",
              defaultValue: "0"
            },
            number2: {
              type: "string",
              defaultValue: "0"
            },
            operator: {
              type: "string",
              defaultValue: "add",
              menu: "sboperator"
            }
          }
        }
      ],
      menus: {
        sbpselect: {
          items: [{text: "エンコード", value: "encode"}, {text: "デコード", value: "decode"}]
        },
        sboperator: {
          items: [{text: "+", value: "add"},{text: "-", value: "sub"},{text: "*", value: "mult"},{text: "/", value: "div"},{text: "%", value: "mod"},{text: "^", value: "exp"}]
        }
      }
    };
  }
  
  sbmodpow({a, b, c}) {
    a = BigInt(a);
    b = BigInt(b);
    c = BigInt(c);
    var n = 1n;
    while(b>0n){
      if((b&1n)==1){
        n = (n*a)%c;
      }
      b>>=1n;
      a=(a*a)%c;
    }
    return n.toString(10);
  }
  
  sbif({boolean, a, b}) {
    var re;
    if(boolean){
      re = a;
    } else{
      re = b;
    }
    return re;
  }
  
  sbget({URL}) {
    return fetch(URL)
      .then(r => r.text())
      .catch(() => '');
  }
  
  sbblob({TEXT, MIME}) {
    var blob = new Blob([TEXT],{type: MIME});
    return URL.createObjectURL(blob);
  }
  
  sbp({type, url}) {
    var re;
    if(type == "encode"){
      re = encodeURI(url);
    } else{
      re = decodeURI(url);
    }
    return re;
  }
  
  sbcalc({number1, number2, operator}) {
    var n1 = BigInt(number1);
    var n2 = BigInt(number2);
    var re;
    switch (operator) {
      case "add":
        re = n1 + n2;
        break;
      case "sub":
        re = n1 - n2;
        break;
      case "mult":
        re = n1 * n2;
        break;
      case "div":
        re = n1 / n2;
        break;
      case "mod":
        re = n1 % n2;
        break;
      case "exp":
        re = n1 ** n2;
        break;
      default:
        break;
    }
    return re.toString(10);
  }
}

Scratch.extensions.register(new suisotaroBlocks());
