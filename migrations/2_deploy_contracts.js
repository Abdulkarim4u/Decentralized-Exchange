const Token = artifacts.require("Token"); // migrating onto the blockchain.

module.exports = function(deployer) {
  deployer.deploy(Token);
};
