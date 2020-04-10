import { ethers } from "ethers";
import AppConfig from "./config/app";

export async function WatchBlocks() {
  let provider = ethers.getDefaultProvider();

  console.log("WATCH BLOCKS");
  provider.on("block", (blockNumber) => {
    console.log("BLOCK", blockNumber);
  });

  console.log("WATCH ACCOUNT", AppConfig.WALLET_ADDRESS);
  provider.on(AppConfig.WALLET_ADDRESS, (balance) => {
    console.log("BALANCE", AppConfig.WALLET_ADDRESS, balance.toString(), ethers.utils.formatEther(balance));
  });
  console.log("WATCH ACCOUNT", AppConfig.WALLET_TO);
  provider.on(AppConfig.WALLET_TO, (balance) => {
    console.log("BALANCE", AppConfig.WALLET_TO, balance.toString(), ethers.utils.formatEther(balance));
  });

  console.log("All done..");
}
