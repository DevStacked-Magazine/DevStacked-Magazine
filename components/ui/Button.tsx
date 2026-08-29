import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link"; 

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  href?: string;
}

export type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer";

  const variants = {
    primary:
      "bg-red-active text-white hover:bg-red-active-hover focus-visible:ring-red-active",
    secondary:
      "bg-ink text-board hover:bg-red-active hover:text-white focus-visible:ring-red-active",
    outline:
      "border border-line-strong bg-transparent text-ink hover:bg-ink hover:text-board hover:border-ink focus-visible:ring-red-active",
    ghost: "bg-transparent text-ink hover:bg-white/10",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;
  const customStyles = {
    borderRadius: "9999px",
    ...(variant === "primary"
      ? { backgroundColor: "var(--red-active)" }
      : {}),
  };

  const content = (
    <>
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        style={customStyles}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      style={customStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
