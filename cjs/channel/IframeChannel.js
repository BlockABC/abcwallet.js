"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IframeChannel {
    postMessage(data) {
        parent.postMessage(data, '*');
    }
}
exports.IframeChannel = IframeChannel;
exports.default = IframeChannel;
