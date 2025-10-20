

function Card({ title = 'Card Title', description = '', accentColor = '#646cff', footerText }) {
  const style = {
    borderLeft: `4px solid ${accentColor}`,
    padding: '12px 16px',
    background: 'var(--card-bg, rgba(255,255,255,0.02))',
    borderRadius: 8,
  };

  return (
    <article style={style} className="props-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {footerText && <small>{footerText}</small>}
    </article>
  );
}

export default Card