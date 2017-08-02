import React from "react";
import SimpleWebRTC from 'simplewebrtc';
class WoWApp extends React.Component {
  constructor(props) {
    super(props);

}
componentDidMount(){
    var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true
});
// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('your awesome room name');
});
}
Component
  render() {
    return (
      <div>
        <h1>Final Project: Test</h1>
        <video id="localVideo"></video>
        <div id="remoteVideos"></div>

      </div>
    );
  };
}

export default WoWApp;
