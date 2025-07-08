import GameBoy from './components/GameBoy';
import { GameStateProvider } from './context/GameStateContext';

export default function App() {
  return (
    <GameStateProvider>
      <GameBoy />
    </GameStateProvider>
  );
}
