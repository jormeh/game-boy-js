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
          A modern twist on the <i>Game Boy Advance SP</i>, built with HTML,
          CSS, and JavaScript using the React framework. The game runs on the
          Canvas element, with dynamic visuals driven by DOM event listeners.
          The design and prototype were crafted in Figma, while visual assets
          were created using Adobe Creative Suite and AI tools.
        </p>
      </div>
      <div className={'panel__controls'}>
        <table className={'panel__controls-table'}>
          <thead>
            <tr>
              <th>Controls</th>
              <th>Key</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Power On</td>
              <td>P</td>
            </tr>
            <tr>
              <td>A / B</td>
              <td>Z / X</td>
            </tr>
            <tr>
              <td>D-pad</td>
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
