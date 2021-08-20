class suisotaro {
  getInfo() {
    return {
      id: 'suisotaroBlocks',
      name: 'suisotaroBlocks',
      blocks: [
        {
          opcode: 'alert',
          blockType: Scratch.BlockType.COMMAND,
          text: 'alert [TEXT]',
          arguments: {
            TEXT: {
              type: "string",
              defaultValue: "hello"
            }
          }
        }
      ]
    }
  }
  alert({TEXT}) {
    window.alert(TEXT);
  }
}

Scratch.extensions.register(new suisotaro());
