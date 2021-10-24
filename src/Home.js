import React from "react";

import ParticleBackground from "./ParticleBackground";

export default function Home(props) {
  return (
    <div className="home">
      <div className="home-container">
        <ParticleBackground />
        <div className="home-center">
          <p>hello;</p>
          <p>
            i'm <span className="intro-name">WEI YUE;</span>
          </p>
        </div>
      </div>
    </div>
  );
}
