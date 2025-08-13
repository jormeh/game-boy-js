import { LetterAIcon } from '@components/icons';
import { Button } from '..';

export default function AButton({ setController }) {
  const pressStartA = () => {
    setController((previous) => ({ ...previous, isUpPressed: true }));
  };

  const pressEndA = () => {
    setController((previous) => ({ ...previous, isUpPressed: false }));
  };

  return (
    <Button
      size="14%"
      x="77.5%"
      y="67.6%"
      onPressStart={pressStartA}
      onPressEnd={pressEndA}
    >
      <LetterAIcon size="50%" />
    </Button>
  );
}
