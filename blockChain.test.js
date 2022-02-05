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

  describe("isValidChain()", () => {
    describe("when a chain does not starts with the genesis block", () => {
      it("returns false", () => {});
    });

    describe("when a chain starts with the genesis block and has multiple blocks", () => {
      describe("and a lastHash reference has changed", () => {
        it("returns false", () => {});
      });

      describe("and the chain contains a block with an invalid field", () => {
        it("returns false", () => {});
      });

      describe("and the chain does not contains any invalid block", () => {
        it("returns true", () => {});
      });
    });
  });
});
