export class IframeChannel {
    postMessage(data) {
        parent.postMessage(data, '*');
    }
}
export default IframeChannel;
