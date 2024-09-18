import Zoom from "react-medium-image-zoom";
import "./zoomedImage.css";
import { type PropsWithChildren } from "react";

export function ZoomedImage({
  children,
  wrapperClassName,
}: PropsWithChildren<{ wrapperClassName?: string }>) {
  return (
    <Zoom>
      <div className={wrapperClassName}>{children}</div>
    </Zoom>
  );
}
