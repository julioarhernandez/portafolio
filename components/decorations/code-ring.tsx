import { Code2 } from "lucide-react";

export function CodeRing() {
  return (
    <div className="code-ring" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="code-ring-svg">
        <path id="code-ring-path" fill="none" d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0" />
        <text className="code-ring-text">
          <textPath href="#code-ring-path" startOffset="0%">
            CLEAN CODE &#8226; ELEGANT CODE &#8226; CLEAN CODE &#8226; ELEGANT CODE &#8226;
          </textPath>
        </text>
      </svg>
      <span className="code-ring-badge">
        <Code2 className="size-6" strokeWidth={2} />
      </span>
    </div>
  );
}
