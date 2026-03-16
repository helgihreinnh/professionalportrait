import React from "react";

interface SketchCardProps {
  children: React.ReactNode;
  className?: string;
  cornerSize?: number;
}

export function SketchCard({ children, className = "", cornerSize = 12 }: SketchCardProps) {
  return (
    <div className={`relative border border-dashed border-[#1A1614] ${className}`}>
      {/* Corner marks */}
      <div
        className="absolute top-0 left-0 border-t-2 border-l-2 border-[#1A1614] -translate-x-[3px] -translate-y-[3px]"
        style={{ width: cornerSize, height: cornerSize }}
      />
      <div
        className="absolute top-0 right-0 border-t-2 border-r-2 border-[#1A1614] translate-x-[3px] -translate-y-[3px]"
        style={{ width: cornerSize, height: cornerSize }}
      />
      <div
        className="absolute bottom-0 left-0 border-b-2 border-l-2 border-[#1A1614] -translate-x-[3px] translate-y-[3px]"
        style={{ width: cornerSize, height: cornerSize }}
      />
      <div
        className="absolute bottom-0 right-0 border-b-2 border-r-2 border-[#1A1614] translate-x-[3px] translate-y-[3px]"
        style={{ width: cornerSize, height: cornerSize }}
      />
      {children}
    </div>
  );
}
