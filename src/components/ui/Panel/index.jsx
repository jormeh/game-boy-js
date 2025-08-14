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
          A modern take on the <i>Game Boy Advance SP,</i> built with HTML, CSS,
          and JavaScript using React. The game runs on the Canvas element,
          featuring dynamic visuals powered by DOM event listeners and React
          state. The project was designed and prototyped in Figma. <br />
          <br />
          The artwork and sound originate from the Nintendo classic{' '}
          <i>Super Mario World</i>. Assets were sourced online and edited using
          Photoshop, Audacity, and TexutrePacker.
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
