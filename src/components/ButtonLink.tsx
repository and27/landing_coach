import React from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const ButtomLink: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
      className={`bg-green-500 text-neutral-900 font-semibold py-3 px-8 rounded-md text-xl 
        hover:bg-green-600 transition-transform hover:scale-110 transform duration-300 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtomLink;
