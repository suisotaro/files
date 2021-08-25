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
          opcode: "sbnumber",
          blockType: "reporter",
          text: "数値　[number]",
          arguments: {
            number: {
              type: "number",
              defaultValue: "0"
            }
          }
        },
        {
          opcode: "sbif",
          blockType: "reporter",
          text: "[boolean] ? [a] : [b]",
          arguments: {
            boolean: {
              type: "Boolean",
              defaultValue: false
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
        },
        {
          opcode: "sbget",
          blockType: "reporter",
          text: "GET [URL]",
          arguments: {
            URL: {
              type: "string",
              defaultValue: "data:,Hello%2C%20World!"
            }
          }
        },
        {
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
        },
        {
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
        },
        {
          opcode: "sbcalc",
          blockType: "reporter",
          text: "[a] [operator] [b]",
          arguments: {
            a: {
              type: "string",
              defaultValue: "0"
            },
            b: {
              type: "string",
              defaultValue: "0"
            },
            operator: {
              type: "string",
              defaultValue: "add",
              menu: "sboperator"
            }
          }
        },
        {
          opcode: "sbmodpow",
          blockType: "reporter",
          text: "[a] ^ [b] % [c]",
          arguments: {
            a: {
              type: "string",
              defaultValue: 0
            },
            b: {
              type: "string",
              defaultValue: 0
            },
            c: {
              type: "string",
              defaultValue: 0
            }
          }
        },
        {
          opcode: "sbgcd",
          blockType: "reporter",
          text: "[a] と [b] の最大公約数",
          arguments: {
            a: {
              type: "string",
              defaultValue: 1
            },
            b: {
              type: "string",
              defaultValue: 1
            }
          }
        },
        {
          opcode: "sblcm",
          blockType: "reporter",
          text: "[a] と [b] の最小公倍数",
          arguments: {
            a: {
              type: "string",
              defaultValue: 1
            },
            b: {
              type: "string",
              defaultValue: 1
            }
          }
        },
        {
          opcode: "sbisPrime",
          blockType: "Boolean",
          text: "[a] は素数か",
          arguments: {
            a: {
              type: "string",
              defaultValue: 7
            }
          }
        },
        {
          opcode: "sbbigrnd",
          blockType: "reporter",
          text: "[a] 桁のランダムな数字",
          arguments: {
            a: {
              type: "string",
              defaultValue: 7
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
  
  sbnumber(args) {
    return Number(args.number);
  }
  
  sbif(args) {
    var re;
    if(args.boolean){
      re = args.a;
    } else{
      re = args.b;
    }
    return re;
  }
  
  sbget(args) {
    return fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
  
  sbblob(args) {
    var blob = new Blob([args.TEXT],{type: args.MIME});
    return URL.createObjectURL(blob);
  }
  
  sbp(args) {
    var re;
    if(args.type == "encode"){
      re = encodeURI(args.url);
    } else{
      re = decodeURI(args.url);
    }
    return re;
  }
  
  sbcalc(args) {
    var a = BigInt(args.a);
    var b = BigInt(args.b);
    var re;
    switch (args.operator) {
      case "add":
        re = a + b;
        break;
      case "sub":
        re = a - b;
        break;
      case "mult":
        re = a * b;
        break;
      case "div":
        re = a / b;
        break;
      case "mod":
        re = a % b;
        break;
      case "exp":
        re = a ** b;
        break;
      default:
        break;
    }
    return re.toString(10);
  }
  
  sbmodpow(args) {
    var a = BigInt(args.a);
    var b = BigInt(args.b);
    var c = BigInt(args.c);
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
  
  sbgcd(args) {
    function gcd(a, b) {
      if(b==0){
        return a;
      }
      return gcd(b,a%b);
    }
    return gcd(BigInt(args.a), BigInt(args.b)).toString(10);
  }
  
  sblcm(args) {
    function lcm(a, b){
      var g=(n,m)=>m?g(m,n%m):n;
      return a*b/g(a,b);
    }
    return lcm(BigInt(args.a), BigInt(args.b)).toString(10);
  }
  
  sbisPrime(args){
    var c=BigInt(args.a);
    if(c<=1){
      return false
    }
    if(2==c){
      return true
    }
    if(0==c%2n){
      return false
    }
    var b=c-1n;
    for(var a=3n;a<=b;a+=2n){
      if(0==c%a){
        return false
      }
    }
    return true
  }
  
  sbbigrnd(args) {
    function rnd(a,b){
      return Math.floor(Math.random()*(b+1-a)+a)
    }
    var r = "" + rnd(1,9);
    for(var i=1n;i<args.a;i++){
      r+=rnd(0,9);
    }
    return r;
  }
  
  MakePrime(args){
    var e=true;
    while(e){
      var p=this.sbbigrnd({l:args.l});
      e=!this.sbisPrime({p:p});
    }
    return p
  }
}

Scratch.extensions.register(new suisotaroBlocks());
