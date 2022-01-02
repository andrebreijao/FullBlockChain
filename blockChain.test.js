const BlockChain = require("./blockChain");
const Block = require("./block");

describe("Blockchain", () => {
  const blockChain = new BlockChain();
  it("Instance of an array", () => {
    {
      expect(blockChain.chain instanceof Array).toBe(true);
    }
  });

  it("Starts with the genesis block", () => {
    expect(blockChain.chain[0]).toEqual(Block.genesis());
  });

  it("Adds a block to the chain", () => {
    const newData = "new data for test";
    blockChain.addBlock({ data: newData });
    expect(blockChain.chain[blockChain.chain.length - 1].data).toEqual(newData);
  });
});
