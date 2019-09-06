"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loglevel = require("loglevel");
const ABCWallet_1 = require("./ABCWallet");
const log = loglevel.getLogger('ABCWallet');
log.setLevel('debug');
const abcwallet = new ABCWallet_1.ABCWallet(log);
exports.default = abcwallet;
