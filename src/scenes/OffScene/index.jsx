import { Scene } from '@classes/scenes';
import '@scenes/OffScene/OffScene.css';
import '@components/ui/Screen/Screen.css';

export default new Scene({
  name: 'off',
  Background,
});

function Background() {
  return <div className="screen__background screen__background--off"></div>;
}
