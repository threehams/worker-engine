import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  variant?: "primary" | "danger";
};
export const Button = React.memo(
  ({
    children,
    className,
    disabled,
    onClick,
    variant = "primary",
    ...rest
  }: ButtonProps) => {
    return (
      <button
        disabled={disabled}
        onClick={(event) => {
          if (!disabled) {
            onClick?.(event);
          }
        }}
        className={clsx(
          "border border-gray-700 border-solid cursor-pointer px-3 relative",
          variant === "danger" && "bg-red-900 text-white",
          disabled && "opacity-50",
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
