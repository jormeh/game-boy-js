import { GameBoyLogo } from '@assets/ui';
import '@components/ui/Panel/Panel.css';

export default function Panel() {
  return (
    <div className={'panel'}>
      <div className={'panel__text'}>
        <h1 className={'panel__text-title'}>
          <img src={GameBoyLogo} alt="Wordmark of GameBoy JavaScript." />
        </h1>
        <p className={'panel__text-description'}>
          A modern take on the <i>Game Boy Advance SP</i> using HTML, CSS, and
          JavaScript with React. The game runs on a web Canvas element,
          utilizing DOM event listeners and React state for dynamic visuals.
          Mockup and prototype were designed in Figma. Artwork and sound
          originate from <i>Super Mario World.</i>{' '}
          <a
            className="panel__text-link"
            href="https://github.com/jormeh/gameboy-js"
            target="_blank"
          >
            See code.
          </a>
        </p>
      </div>
      <div className={'panel__controls'}>
        <table className={'panel__controls-table'}>
          <thead>
            <tr>
              <th>Controls</th>
              <th>Keys</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Power On</td>
              <td>P</td>
            </tr>
            <tr>
              <td>Movement</td>
              <td>Arrows</td>
            </tr>
            <tr>
              <td>Start</td>
              <td>Enter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
