const Block = require("./block.js");
const { GENESIS_DATA } = require("./config");

describe("Block", () => {
  const timeStamp = "a-data";
  const lastHash = "foo-hash";
  const hash = "kkk-hash";
  const data = ["block", "data"];
  const block = new Block({ timeStamp, lastHash, hash, data });

  it("has a timestamp, lastHash, hash, and data property", () => {
    expect(block.timeStamp).toEqual(timeStamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe("genesis()", () => {
    const genesisBlock = Block.genesis();
    it("returns a block instance", () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    it("returns the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });

  describe("minedBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "blockData";
    const minedBlock = Block.minedBlock({ lastBlock, data });

    it("returns a block instance", () => {
      expect(minedBlock instanceof Block).toBe(true);
    });

    it("sets the `lastHash` to be the `hash` of the last block", () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it("it sets the `data`", () => {
      expect(minedBlock.data).toEqual(data);
    });

    it("sets the `timeStamp`", () => {
      expect(minedBlock.timeStamp).not.toEqual(undefined);
    });
  });
});
