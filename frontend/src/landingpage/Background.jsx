// src/components/Background.jsx
import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="\media\images\sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
