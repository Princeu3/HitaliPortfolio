"use client";

import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Dark logo for light mode */}
      <Image
        src="/logolightmode.png"
        alt="HK Logo"
        width={32}
        height={32}
        className="block dark:hidden"
        priority
      />
      {/* Light logo for dark mode */}
      <Image
        src="/logodarkmode.png"
        alt="HK Logo"
        width={32}
        height={32}
        className="hidden dark:block"
        priority
      />
    </div>
  );
}
