type CodeOrnamentProps = {
  showBrowser?: boolean;
  showEnvelope?: boolean;
};

export function CodeOrnament({ showBrowser = false, showEnvelope = false }: CodeOrnamentProps) {
  return (
    <div className="about-ornament">
      <div className="about-dot-grid" />

      {showBrowser && (
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
      )}

      {showEnvelope && (
        <div className="about-envelope">
          <div className="about-envelope-flap" />
          <div className="about-envelope-line about-envelope-line-left" />
          <div className="about-envelope-line about-envelope-line-right" />
          <div className="about-envelope-paper" />
        </div>
      )}

      <div className="about-code-badge">&lt; / &gt;</div>
    </div>
  );
}