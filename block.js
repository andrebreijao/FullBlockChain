const { GENESIS_DATA } = require("./config");

class Block {
  constructor({ timeStamp, lastHash, hash, data }) {
    this.timeStamp = timeStamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    // return new Block(GENESIS_DATA);
    return new this(GENESIS_DATA);
  }

  static minedBlock({ lastBlock, data }) {
    return new this({
      timeStamp: Date.now(),
      lastHash: lastBlock.hash,
      hash: "teste",
      data,
    });
  }
}

module.exports = Block;
