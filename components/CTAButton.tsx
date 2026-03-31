import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const base = "inline-block font-semibold rounded-lg transition-colors text-center";
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white px-8 py-4 text-lg shadow-sm",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
