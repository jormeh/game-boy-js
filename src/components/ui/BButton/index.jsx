import { LetterBIcon } from '@components/icons';
import { Button } from '..';

export default function BButton({ setController }) {
  const pressStartB = () => {
    setController((previous) => ({ ...previous, isDownPressed: true }));
  };

  const pressEndB = () => {
    setController((previous) => ({ ...previous, isDownPressed: false }));
  };

  return (
    <Button
      size="14%"
      x="58.1%"
      y="70.1%"
      onPressStart={pressStartB}
      onPressEnd={pressEndB}
    >
      <LetterBIcon size="40%" />
    </Button>
  );
}
