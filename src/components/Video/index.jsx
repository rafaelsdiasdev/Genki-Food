import React from 'react';
import OrganicFood from '../../assets/video/organic_food.mp4';

function Video() {
  return (
    <video
      src={OrganicFood}
      type="video/mp4"
      width="100%"
      controls="controls"
      autoPlay="autoplay"
      muted
      loop
    />
  );
}

export default Video;
