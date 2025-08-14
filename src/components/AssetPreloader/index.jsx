import { AUDIO, IMAGES, BACKGROUNDS } from '@constants/index';
import { useEffect, useState } from 'react';
import '@components/AssetPreloader/AssetPreloader.css';

export default function AssetPreloader({ children }) {
  const [loaded, setLoaded] = useState(0);
  const total = IMAGES.length + AUDIO.length + BACKGROUNDS.length;
  const percent = total > 0 ? Math.floor((loaded / total) * 100) : 100;

  useEffect(() => {
    if (total === 0) return;

    const increment = () => setLoaded((prev) => prev + 1);

    // Preload and decode images
    IMAGES.forEach(async (src) => {
      try {
        const img = new Image();
        img.src = src;
        await img.decode(); // wait until decoded
      } catch (e) {
        console.warn(`Image failed to load: ${src}`, e);
      } finally {
        increment();
      }
    });

    // Preload and decode background images, also paint them offscreen
    const hiddenContainer = document.createElement('div');
    hiddenContainer.style.position = 'absolute';
    hiddenContainer.style.top = '-9999px';
    hiddenContainer.style.width = '1px';
    hiddenContainer.style.height = '1px';
    document.body.appendChild(hiddenContainer);

    BACKGROUNDS.forEach(async (src) => {
      try {
        const img = new Image();
        img.src = src;
        await img.decode();

        // Force CSS background paint
        const div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.backgroundImage = `url(${src})`;
        div.style.backgroundSize = 'cover';
        hiddenContainer.appendChild(div);
      } catch (e) {
        console.warn(`Background failed to load: ${src}`, e);
      } finally {
        increment();
      }
    });

    // Preload and decode audio using Web Audio API
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    AUDIO.forEach(async (src) => {
      try {
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        await audioContext.decodeAudioData(arrayBuffer);
      } catch (e) {
        console.warn(`Audio failed to load: ${src}`, e);
      } finally {
        increment();
      }
    });

    return () => {
      document.body.removeChild(hiddenContainer);
    };
  }, [total]);

  if (loaded < total) {
    return (
      <div className="preloader">
        <p className="preloader__text">Loading assets: {percent}%</p>
        <div className="preloader__bar">
          <div
            className="preloader__bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
