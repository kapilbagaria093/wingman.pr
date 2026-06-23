interface BracketFrameProps {
  color: string;
  size?: number;
  thickness?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function BracketFrame({
  color,
  size = 24,
  thickness = 3,
  className = "",
  children,
  style = {},
}: BracketFrameProps) {
  const corner = size;
  const t = thickness;

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Top-left */}
      <span
        className="absolute"
        style={{
          top: 0,
          left: 0,
          width: corner,
          height: corner,
          borderTop: `${t}px solid ${color}`,
          borderLeft: `${t}px solid ${color}`,
        }}
      />
      {/* Top-left tick */}
      <span
        className="absolute"
        style={{
          top: corner / 2,
          left: -6,
          width: 5,
          height: t,
          background: color,
        }}
      />
      {/* Top-right */}
      <span
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: corner,
          height: corner,
          borderTop: `${t}px solid ${color}`,
          borderRight: `${t}px solid ${color}`,
        }}
      />
      {/* Bottom-left */}
      <span
        className="absolute"
        style={{
          bottom: 0,
          left: 0,
          width: corner,
          height: corner,
          borderBottom: `${t}px solid ${color}`,
          borderLeft: `${t}px solid ${color}`,
        }}
      />
      {/* Bottom-right */}
      <span
        className="absolute"
        style={{
          bottom: 0,
          right: 0,
          width: corner,
          height: corner,
          borderBottom: `${t}px solid ${color}`,
          borderRight: `${t}px solid ${color}`,
        }}
      />
      {/* Bottom-right tick dots */}
      <span
        className="absolute flex gap-0.5"
        style={{ bottom: corner / 2 - 2, right: corner + 4 }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ width: 3, height: 3, background: color, display: "block" }}
          />
        ))}
      </span>
      {children}
    </div>
  );
}
