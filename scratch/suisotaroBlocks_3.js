const menuIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA8CAYAAAA34qk1AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOqADAAQAAAABAAAAPAAAAAAs615UAAAAHGlET1QAAAACAAAAAAAAAB4AAAAoAAAAHgAAAB4AAAECIb82kwAAAM5JREFUaAXslNEJxDAMQz1td7qdspMvgWsbqCqkzwMFDMF2RP1st6q7LSvtfKauY5rqnTWmvmNlFbmgiMcpcuWKsleaU+TKTaGvnb6Y8ks6OscIQeDYntGM7gSJIGRHs6PPdYEetIfMB0WIE40n82V0M7pknPYQG1MU298qdzamKKZoJicEQiAEQiAEQiAEQiAE/pPAGF2OqVUeR5djqu6Z52ivXKvIBUQ99oeowr88W9/pZgoF3bCJAw3msvXT0ZefFKO8x2zi+2Phbup/AQAA///JunG3AAAArUlEQVTtmFEKhDAMBXNa7+SdvFOXwrqgkO2bv12cQpDW+DCT14JWHcdAUeHYtlEkQtlPGtGeuajICSUd+EVS4Xce1rejjaVT8Jh4KmxHv58Jz9mj0DGmS0ACEpCABCQgAQlI4G8I7PsoEmlhP/eZRoqcuemw0OZfUgrwzMMg7Wizd0+iqysmvhK83cf6dtSO3jzUTLG1Gp1uGetrXa3bmem6jq11fXw5w/oPse4LtniNtZAV2lEAAAAASUVORK5CYII=";

class suisotaroBlocks {
  getInfo() {
    return {
      id: "suisotaroBlocks",
      name: "suisotaroBlocks",
      menuIconURI: menuIconURI,
      color1: '#ff4c4c',
      color2: '#e64444',
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
        },
        {
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
              defaultValue: ""
            }
          }
        },{
          opcode: "sbsend",
          blockType: "command",
          text: "send [message]",
          arguments: {
            message: {
              type: "string",
              defaultValue: "test"
            }
          }
        },{
          opcode: "sbhat",
          blockType: "hat",
          text: "send [message]",
          arguments: {
            message: {
              type: "string",
              defaultValue: "test"
            }
          }
        }
      ]
    };
  }
  
  sbmodpow({a, b, c}) {
    var n=1;
    while(b>0){
      if((b&1)==1){
        n = (n*a)%c
      }
      b>>=1;
      a=(a*a)%c
    }
    return n;
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
  
  sbsend({message}){
    this["sbsend$" + message] = true;
  }
  
  sbhat({message}) {
	  var rtn = this["sbsend$" + message] && (!this.lasthat);
	  this["sbsend$" + message] = false;
  	this.lasthat = rtn;
	  return rtn;
	}
}

Scratch.extensions.register(new suisotaroBlocks());
