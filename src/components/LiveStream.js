// src/LiveStream.js
import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the backend

function LiveStream() {
  const [streaming, setStreaming] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  useEffect(() => {
    // Capture the video stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        console.log('Media stream captured');
      })
      .catch(err => console.error('Error accessing media devices.', err));
  }, []);

  const startStreaming = () => {
    setStreaming(true);
    const stream = videoRef.current.srcObject;
    mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });

    socket.emit('startStream'); // Notify the server to start a new stream

    mediaRecorderRef.current.ondataavailable = function (event) {
      if (event.data.size > 0) {
        console.log('Streaming data to server');
        socket.emit('stream', event.data);
      }
    };

    mediaRecorderRef.current.start(1000); // Send data every second
    console.log('Started streaming');
  };

  const stopStreaming = () => {
    setStreaming(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    socket.emit('stopStream'); // Notify the server to stop the stream
    console.log('Stopped streaming');
  };

  return (
    <div>
      <h1>Live Streaming Page</h1>
      <video ref={videoRef} width="600" height="400" controls></video>
      {!streaming && <button onClick={startStreaming}>Start Streaming</button>}
      {streaming && <button onClick={stopStreaming}>Stop Streaming</button>}
    </div>
  );
}

export default LiveStream;
