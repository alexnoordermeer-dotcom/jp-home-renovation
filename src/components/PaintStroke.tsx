type PaintStrokeProps = {
  flip?: boolean;
};

export const PaintStroke = ({ flip }: PaintStrokeProps) => {
  return (
    <div className={`relative h-10 md:h-14 overflow-hidden ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-red-600"
      >
        <path
          fill="currentColor"
          d="M0,18 C180,42 320,2 520,20 C740,40 860,4 1080,16 C1240,24 1340,8 1440,20 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  );
};
