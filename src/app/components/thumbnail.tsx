import React, { useState } from 'react';
import Image from 'next/image';
import thumbnail from '../imgs/thumbnail.png';
import { CardS, TextCardS, VideoS } from '../stylescomponents/styles';

export default function Thumbnail() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <CardS>
        <VideoS onClick={handleVideoClick}>
          <div style={{ width: '100%' }}>
            <Image src={thumbnail} alt="Logo" />
          </div>
        </VideoS>
        <TextCardS>    
          Como aumentar sua Geração de Leads feat. Traktor
        </TextCardS>
      </CardS>

      {isVideoOpen && (
        <div className="video-overlay">
          <div className="video-modal">
            <h3>Webnar: Como aumentar sua Geração de Leads feat. Traktor</h3>
            <div className="video-container">
              <video controls>
                <source src="https://www.youtube.com/watch?v=5MCpTa0yYVM&list=RD5MCpTa0yYVM&start_radio=1.mp4" type="video/mp4" />
              </video>
            </div>
            <button onClick={handleCloseVideo}>Fechar</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .video-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .video-modal {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          z-index: 9999;
        }

        .video-container {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}

