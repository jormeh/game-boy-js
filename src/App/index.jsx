import { GameStateProvider } from '@context/GameStateContext';
import { GameBoy, Panel } from '@components/ui';
import '@App/App.css';

export default function App() {
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
