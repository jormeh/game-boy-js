import '@components/scenes/CreditsForeground/CreditsForeground.css';

export default function CreditsForeground() {
  return (
    <div className="screen__credits">
      <p className="screen__credits-message">
        Thanks for playing!
        <br />
        Check out the{' '}
        <a
          className="screen__credits-link"
          href="https://github.com/jormeh/gameboy-js"
          target="_blank"
        >
          repo.
        </a>
      </p>
    </div>
  );
}
