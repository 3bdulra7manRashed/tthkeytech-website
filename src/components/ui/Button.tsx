import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const styles = cn(
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" &&
      "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-purple dark:text-brand-light dark:hover:text-white",
    disabled && "pointer-events-none opacity-50",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}
