import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "white" | "donate";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:ring-brand-500",
  secondary:
    "bg-accent-500 text-ink-500 shadow-soft hover:bg-accent-600 focus-visible:ring-accent-500",
  outline:
    "border border-brand-300 text-brand-900 bg-white hover:bg-brand-50 focus-visible:ring-brand-500",
  white:
    "bg-white text-brand-800 shadow-soft hover:bg-slate-50 focus-visible:ring-white",
  donate:
    "donate-attention bg-rescue-500 text-white shadow-lg shadow-rescue-700/25 hover:bg-rescue-600 focus-visible:ring-rescue-500",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[48px] disabled:pointer-events-none disabled:opacity-50";

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
