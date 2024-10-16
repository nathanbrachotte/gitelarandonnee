import React from "react";
import { cn } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  className,
  target = "_self",
  children,
  ...props
}) => {
  return (
    <a
      className={cn(
        "cursor-pointer text-green-800 underline decoration-green-800 decoration-[0.1em] underline-offset-2 transition-all",
        "visited:text-indigo-700 visited:decoration-indigo-700",
        "hover:decoration-green-400 hover:text-green-400",
        className,
      )}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
};
