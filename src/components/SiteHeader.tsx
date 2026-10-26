export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="Nugget Night home">
        <span className="brand-mark">100</span>
        <span className="brand-copy">
          NUGGET
          <br />
          <i>NIGHT</i>
        </span>
      </a>
      <div className="header-status">
        <span className="status-dot" />
        LIVE FROM THE DINING ROOM
      </div>
    </header>
  );
}
