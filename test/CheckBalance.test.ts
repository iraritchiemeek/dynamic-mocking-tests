import {expect, use} from "chai";
import {Contract, utils, Wallet} from "ethers";
import {deployContract, deployMockContract, MockProvider, solidity} from "ethereum-waffle";
import IERC20 from "../build/IERC20.json";
import AmIRichAlready from "../build/AmIRichAlready.json";

use(solidity);

const [wallet] = new MockProvider().getWallets();
