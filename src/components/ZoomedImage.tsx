import Zoom from "react-medium-image-zoom";
import "./zoomedImage.css";
import { type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function ZoomedImage({
  children,
  wrapperClassName,
}: PropsWithChildren<{ wrapperClassName?: string }>) {
  return (
    <Zoom>
      <div className={cn("", wrapperClassName)}>{children}</div>
    </Zoom>
  );
}
