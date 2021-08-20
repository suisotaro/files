class suisotaro {
  getInfo() {
    return {
      id: 'suisotaroBlocks',
      name: 'suisotaroBlocks',
      blocks: [
        {
          opcode: 'log',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log [TEXT]',
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
  log({TEXT}) {
    console.log(TEXT);
  }
}

Scratch.extensions.register(new suisotaro());
