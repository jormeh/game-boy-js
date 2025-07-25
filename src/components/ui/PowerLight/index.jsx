import '@components/ui/PowerLight/PowerLight.css';

export default function PowerLight({ x = 0, y, size, isPowerOn = false }) {
  return (
    <div
      className={`light${isPowerOn ? ' light--power-on' : ''}`}
      style={{ [x ? 'left' : 'right']: x, top: y, width: size }}
    ></div>
  );
}
