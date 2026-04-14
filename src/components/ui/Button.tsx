import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "white" | "donate";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-500 text-white shadow-soft hover:bg-emerald-600 focus-visible:ring-emerald-400",
  secondary:
    "bg-sky-500 text-white shadow-soft hover:bg-sky-600 focus-visible:ring-sky-400",
  outline:
    "border border-brand-300 text-brand-900 bg-white hover:bg-brand-50 focus-visible:ring-brand-500",
  white:
    "bg-white text-brand-800 shadow-soft hover:bg-slate-50 focus-visible:ring-white",
  donate:
    "bg-orange-500 text-white shadow-lg shadow-orange-800/20 hover:bg-orange-600 focus-visible:ring-orange-400",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[48px]";

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
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
