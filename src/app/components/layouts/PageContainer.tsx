import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared layout wrapper used by every section.
 * Enforces consistent max-width, horizontal padding, and centering.
 * All sections should wrap their inner content in this component.
 */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`max-w-[1400px] mx-auto px-6 md:px-14 w-full ${className}`}>
      {children}
    </div>
  );
}
