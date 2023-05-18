import USDTImg from "../../assets/images/usdt.png";
import ETHImg from "../../assets/images/eth.png";
import USDCImg from "../../assets/images/usdc.png";
import BNBImg from "../../assets/images/bnb.png";

export const ETH_CRYPTO_VALUES = {
  5: [{
      img: ETHImg,
      title: "ETH",
      value: "eth"
    }, {
      img: USDCImg,
      title: "USDC",
      value: "0x65aFADD39029741B3b8f0756952C74678c9cEC93"
    }, {
      img: USDTImg,
      title: "USDT",
      value: "0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780"
    }],
  97: [{
    img: BNBImg,
    title: "BNB",
    value: "eth"
  }, {
    img: USDCImg,
    title: "USDC",
    value: "0x64544969ed7EBf5f083679233325356EbE738930"
  }, {
    img: USDTImg,
    title: "USDT",
    value: "0x377533d0e68a22cf180205e9c9ed980f74bc5050"
  }]
}

export const ETH_CRYPTO_FILTER_VALUES = {
  5: [{
    title: "All",
    value: ""
  },{
    img: ETHImg,
    title: "ETH",
    value: "eth"
  }, {
    img: USDCImg,
    title: "USDC",
    value: "0x65aFADD39029741B3b8f0756952C74678c9cEC93"
  }, {
    img: USDTImg,
    title: "USDT",
    value: "0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780"
  }],
  97: [{
    title: "All",
    value: ""
  },{
    img: BNBImg,
    title: "BNB",
    value: "eth"
  }, {
    img: USDCImg,
    title: "USDC",
    value: "0x64544969ed7EBf5f083679233325356EbE738930"
  }, {
    img: USDTImg,
    title: "USDT",
    value: "0x377533d0e68a22cf180205e9c9ed980f74bc5050"
  }]
}