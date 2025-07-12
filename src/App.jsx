import GameBoy from '@components/ui/GameBoy';
import { GameStateProvider } from '@context/GameStateContext';

export default function App() {
  return (
    <GameStateProvider>
      <GameBoy />
    </GameStateProvider>
  );
}
