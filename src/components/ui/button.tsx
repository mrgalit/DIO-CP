import * as React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };

export function Button({ className, asChild, ...props }: Props) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium shadow-sm",
        className
      )}
      {...props}
    />
  );
}
