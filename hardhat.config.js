/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x674e805ce9e121fea4a7da8d0d05593a32d505f5f54381fe9fad84b29df5ed00","balance":"1000000000000000000000"},{"privateKey":"0xf3c905425b2cd2100c57f3a91767836f143d451bd4148760801d1c924fb812ef","balance":"1000000000000000000000"},{"privateKey":"0xba3b53002e43101a1d3a351dbfe7969d1c3b63198365802c140a242c7912d153","balance":"1000000000000000000000"},{"privateKey":"0x9c6ff004d9303e8b0df22bd3163fb5876184e87310c21eacb9bb0a17a71f763a","balance":"1000000000000000000000"},{"privateKey":"0x73fb6bb4c074e2d4cf6387e6f8f0ec98369e54f9078a5d0b48b846c8dfcc5dfc","balance":"1000000000000000000000"},{"privateKey":"0x71251def946f78fab55f6631558bc14422bb23936d743095658db9807bf8ae79","balance":"1000000000000000000000"},{"privateKey":"0x52564853b96692838826a9935baaaa54e96ae7f67c8b2a2155640cd8256fb2ab","balance":"1000000000000000000000"},{"privateKey":"0x6a1c7591db8b0a9e13f0fa7bcdd5fb7f9cac43bc22c85bcfd71d5b217b1014e4","balance":"1000000000000000000000"},{"privateKey":"0x691ee71ba42c3f59a84c315bdd3acbe34dae3b67d5533fe66591b40d0cd7d08b","balance":"1000000000000000000000"},{"privateKey":"0x51f79c52456b17a4a459e63564d26ea338f95fe14448f4665063c838fca5ffc3","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};