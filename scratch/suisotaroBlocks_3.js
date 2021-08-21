class suisotaroBlocks {
  getInfo() {
    return {
      id: "suisotaroBlocks",
      name: "suisotaroBlocks",
      blocks: [
        {
          "opcode": "smodpow",
          "blockType": "reporter",
          "text": " [a] ^ [b] % [c] ",
          "arguments": {
            "a": {
              type: "number",
              defaultValue: 0
            },
            "b": {
              type: "number",
              defaultValue: 0
            },
            "c": {
              type: "number",
              defaultValue: 0
            }
          }
        }
      ]
    };
  }
  
  smodpow({
    a,
    b,
    c
  }) {
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
}

Scratch.extensions.register(new suisotaroBlocks());
