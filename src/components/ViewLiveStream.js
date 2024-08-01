import React, { useRef, useState } from 'react';

function ViewLiveStream() {
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const handlePlay = () => {
    fetch('http://localhost:3000/api/live')
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('No live stream available');
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      })
      .catch(error => {
        console.error('Error fetching live stream:', error);
      });
  };

  return (
    <div>
      <h1>Live Stream Viewer</h1>
      <video 
        ref={videoRef} 
        width="600" 
        height="400" 
        controls 
        autoPlay 
        src={videoUrl}
      />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default ViewLiveStream;
