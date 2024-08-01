import React, { useEffect, useRef, useState } from 'react';

function ViewRecordedStream() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/recorded')
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('No recorded video available');
      })
      .then(blob => {
        const videoUrl = URL.createObjectURL(blob);
        videoRef.current.src = videoUrl;
        setVideoLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching recorded video:', error);
      });
  }, []);

  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <div>
      <h1>Recorded Stream Viewer</h1>
      <video ref={videoRef} width="600" height="400" controls></video>
      {videoLoaded && <button onClick={handlePlay}>Play</button>}
    </div>
  );
}

export default ViewRecordedStream;
