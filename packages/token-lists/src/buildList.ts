import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as tradingplanetDefaultVersion } from "../lists/tradingplanet-default.json";
import { version as tradingplanetExtendedVersion } from "../lists/tradingplanet-extended.json";
import { version as tradingplanetTop15Version } from "../lists/tradingplanet-top-15.json";
import { version as tradingplanetTop100Version } from "../lists/tradingplanet-top-100.json";
import tradingplanetDefault from "./tokens/tradingplanet-default.json";
import tradingplanetExtended from "./tokens/tradingplanet-extended.json";
import tradingplanetTop100 from "./tokens/tradingplanet-top-100.json";
import tradingplanetTop15 from "./tokens/tradingplanet-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "tradingplanet-default": {
    list: tradingplanetDefault,
    name: "tradingplanet Default",
    keywords: ["tradingplanet", "default"],
    logoURI:
      "https://tokens.tradingplanet.finance/images/0x96e738bc52fBcc305E8c4401d05C532Dd4D2F314.png",
    sort: false,
    currentVersion: tradingplanetDefaultVersion,
  },
  "tradingplanet-extended": {
    list: tradingplanetExtended,
    name: "tradingplanet Extended",
    keywords: ["tradingplanet", "extended"],
    logoURI:
      "https://tokens.tradingplanet.finance/images/0x96e738bc52fBcc305E8c4401d05C532Dd4D2F314.png",
    sort: true,
    currentVersion: tradingplanetExtendedVersion,
  },
  "tradingplanet-top-100": {
    list: tradingplanetTop100,
    name: "tradingplanet Top 100",
    keywords: ["tradingplanet", "top 100"],
    logoURI:
      "https://tokens.tradingplanet.finance/images/0x96e738bc52fBcc305E8c4401d05C532Dd4D2F314.png",
    sort: true,
    currentVersion: tradingplanetTop100Version,
  },
  "tradingplanet-top-15": {
    list: tradingplanetTop15,
    name: "tradingplanet Top 15",
    keywords: ["tradingplanet", "top 15"],
    logoURI:
      "https://tokens.tradingplanet.finance/images/0x96e738bc52fBcc305E8c4401d05C532Dd4D2F314.png",
    sort: true,
    currentVersion: tradingplanetTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // PLANET first in extended list
            if ((t1.symbol === "PLANET") !== (t2.symbol === "PLANET")) {
              return t1.symbol === "PLANET" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
