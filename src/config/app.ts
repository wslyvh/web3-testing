import * as dotenv from "dotenv";

dotenv.config();

const AppConfig = {
  NODE_ENV: process.env.NODE_ENV,

  RPC_SERVER: process.env.RPC_SERVER || "http://127.0.0.1:7545",
  WALLET_PK: process.env.WALLET_PK || "",
  WALLET_ADDRESS: process.env.WALLET_ADDRESS || "",
  WALLET_TO: process.env.WALLET_TO || "",
};

export = AppConfig;
