import { GameStateProvider } from '@context/GameStateContext';
import useWindowHeight from '@hooks/useWindowHeight';
import { GameBoy, Panel } from '@components/ui';
import AssetPreloader from '@components/AssetPreloader';
import '@App/App.css';

export default function App() {
  useWindowHeight();

  return (
    <AssetPreloader>
      <div className={'container'}>
        <Panel />
        <GameStateProvider>
          <GameBoy />
        </GameStateProvider>
        <div className={'column'}></div>
      </div>
    </AssetPreloader>
  );
}
