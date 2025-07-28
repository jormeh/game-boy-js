import '@components/scenes/TransitionLayer/TransitionLayer.css';

export default function TransitionLayer({ transition }) {
  return (
    <div
      className={`screen__transition screen__transition--${transition.classModifier}`}
      style={{
        animationDuration: transition.animationDurationS,
        animationDelay: transition.animationDelayS,
      }}
    >
      <p className="screen__transition-text">{transition.text}</p>
    </div>
  );
}
