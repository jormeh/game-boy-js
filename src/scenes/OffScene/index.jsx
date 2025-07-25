import { Scene } from '@classes/scenes';
import '@styles/ui/Screen.css';
import '@scenes/OffScene/OffScene.css';

export default new Scene({
  name: 'off',
  Background,
});

function Background() {
  return <div className="screen__background screen__background--off"></div>;
}
