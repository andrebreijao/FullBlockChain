const Block = require("./block");

class BlockChain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.minedBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain = [...this.chain, newBlock];
  }
}

module.exports = BlockChain;
