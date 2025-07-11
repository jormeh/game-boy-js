import '/src/styles/foregrounds/MenuOverlay.css';

export default function MenuOverlay() {
  return (
    <div className="screen__menu">
      <img className="screen__logo" src="src/assets/ui/menu-logo.webp" />
      <img className="screen__mario" src="src/assets/ui/menu-mario.webp" />
      <p className="screen__text">Press Start</p>
    </div>
  );
}
