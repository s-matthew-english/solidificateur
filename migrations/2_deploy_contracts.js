var Incrementer = artifacts.require("./Incrementer.sol");

module.exports = function(deployer) {
  deployer.deploy(Incrementer);
};
