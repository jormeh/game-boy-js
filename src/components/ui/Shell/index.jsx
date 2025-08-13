import { useEffect } from 'react';
import { GameBoyShell } from '@assets/ui';
import '@components/ui/Shell/Shell.css';

export default function Shell() {
  useEffect(() => {
    const hideMenu = (event) => {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', hideMenu);

    return () => document.removeEventListener('contextmenu', hideMenu);
  }, []);

  return <img className="gameboy__shell" src={GameBoyShell} />;
}
