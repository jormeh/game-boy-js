import { GameStateProvider } from '@context/GameStateContext';
import useWindowHeight from '@hooks/useWindowHeight';
import { GameBoy, Panel } from '@components/ui';
import '@App/App.css';

export default function App() {
  useWindowHeight();

  return (
    <div className={'container'}>
      <Panel />
      <GameStateProvider>
        <GameBoy />
      </GameStateProvider>
      <div className={'column'}></div>
    </div>
  );
}
