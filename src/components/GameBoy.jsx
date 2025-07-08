import gameboyShell from '../assets/ui/gameboy-shell.png';
import '../styles/GameBoy.css';
import DPad from './DPad';
import Button from './Button';
import PowerIcon from './PowerIcon';
import LetterAIcon from './LetterAIcon';
import LetterBIcon from './LetterBIcon';
import PowerLight from './PowerLight';
import Screen from './Screen';

export default function GameBoy() {
  return (
    <div className="gameboy">
      <Screen width="84.6%" height="33.6%" y="6.5%" />
      <PowerLight size="2.1%" y="61.2%" isPowerOn={true} />
      <PowerLight size="2.1%" y="63.5%" isPowerOn={false} />
      <Button size="6.8%" x="46.6%" y="63.3%">
        <PowerIcon size="60%" />
      </Button>
      <Button size="14%" x="77.5%" y="67.6%">
        <LetterAIcon size="50%" />
      </Button>
      <Button size="14%" x="58.1%" y="70.1%">
        <LetterBIcon size="40%" />
      </Button>
      <DPad size="22%" x="15.1%" y="69%" />
      <Button size="6.8%" x="36.6%" y="91.8%" />
      <Button size="6.8%" x="56.4%" y="91.8%" />
      <img className="gameboy__shell" src={gameboyShell} />
    </div>
  );
}
