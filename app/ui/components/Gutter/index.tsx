import React, { Ref } from "react";

import classes from "./index.module.scss";

type Props = {
  left?: boolean;
  right?: boolean;
  className?: string;
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
};

export const Gutter = React.forwardRef<HTMLDivElement, Props>(
  ({ left = true, right = true, className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          classes.gutter,
          left && classes.gutterLeft,
          right && classes.gutterRight,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    );
  }
);

Gutter.displayName = "Gutter";
