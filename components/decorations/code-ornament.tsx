export function CodeOrnament() {
  return (
    <div className="about-ornament">
      <div className="about-dot-grid" />
      <div className="about-browser">
        <div className="about-browser-bar">
          <span className="about-window-dot" />
          <span className="about-window-dot" />
          <span className="about-window-dot" />
        </div>
        <div className="about-browser-body">
          <div className="about-browser-input" />
          <div className="about-browser-columns">
            <div className="about-browser-block about-browser-block-tall" />
            <div className="about-browser-stack">
              <div className="about-browser-block" />
              <div className="about-browser-block about-browser-block-wide" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-code-badge">&lt; / &gt;</div>
    </div>
  );
}