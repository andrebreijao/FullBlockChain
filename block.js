const { GENESIS_DATA } = require("./config");
const { cryptoHash } = require("./cryptoHash");

class Block {
  constructor({ timeStamp, lastHash, data, hash }) {
    this.timeStamp = timeStamp;
    this.lastHash = lastHash;
    this.data = data;
    this.hash = hash;
  }
  static genesis() {
    // return new Block(GENESIS_DATA);
    return new this(GENESIS_DATA);
  }
  static minedBlock({ lastBlock, data }) {
    const timeStamp = Date.now();
    const lastHash = lastBlock.hash;
    return new this({
      timeStamp,
      lastHash,
      data,
      hash: cryptoHash(timeStamp, lastHash, data),
    });
  }
}

module.exports = Block;
