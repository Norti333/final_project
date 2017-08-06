import React from "react";
import SimpleWebRTC from 'simplewebrtc';

class VideoChat extends React.Component {
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
  render() {
    return (
      <div>
        <h1>Initiator</h1>
        <video id="localVideo"></video>
          <h1>Guest</h1>
        <div id="remoteVideos"></div>

      </div>
    );
  };
}

export default VideoChat;
