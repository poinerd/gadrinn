export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">FormAI</span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><button className="cta-btn-nav">Sign In</button></li>
        </ul>
      </div>
    </nav>
  );
}
