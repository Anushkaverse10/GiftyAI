function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <span className="logo__icon">🎁</span>
          <span className="logo__text">GiftyAI</span>
        </div>
        <p className="header__tagline">Find the perfect gift, every time.</p>
      </div>
      <div className="header__blob blob1"></div>
      <div className="header__blob blob2"></div>
    </header>
  );
}
export default Header;