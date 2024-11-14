import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "store" | "link";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Add this line
}

export function Button({
  children,
  icon: Icon,
  variant = "primary",
  className = "",
  onClick, // Add this line
}: ButtonProps) {
  const baseStyles =
    "font-semibold transition-all flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-[#FFAE00] hover:bg-[#E69D00] text-white px-8 py-4 rounded-full text-lg",
    store:
      "bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl text-base",
    link: "bg-gray-800 hover:bg-gray-700 text-white px-3 py-3 rounded-xl text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick} // Add this line
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
