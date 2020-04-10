import { ethers } from "ethers";
import AppConfig from "./config/app";

export async function SendTransaction() {
  let provider = ethers.getDefaultProvider();

  let privateKey = AppConfig.WALLET_PK;
  let wallet = new ethers.Wallet(privateKey, provider);
  console.log("FROM PK", wallet.address);

  let balance = await wallet.getBalance();
  console.log("BALANCE", balance.toString(), ethers.utils.formatEther(balance));

  let transactionCount = await wallet.getTransactionCount();
  console.log("TRANSACTION", transactionCount);

  let gasPrice = await provider.getGasPrice();
  console.log("GAS PRICE", gasPrice.toString());

  // The exact cost (in gas) to send to an Externally Owned Account (EOA)
  // The balance less exactly the txfee in wei
  let gasLimit = 21000;
  let inWei = ethers.utils.parseEther("0.001");
  let value = inWei.sub(gasPrice.mul(gasLimit));
  console.log("VALUE", inWei.toString(), value.toString());

  let tx = {
    gasLimit: gasLimit,
    gasPrice: gasPrice,
    to: AppConfig.WALLET_TO,
    value: value,
  };
  console.log("TX", tx);

  let receipt = await wallet.sendTransaction(tx);
  console.log("RECEIPT", receipt);

  console.log("All done..");
}
