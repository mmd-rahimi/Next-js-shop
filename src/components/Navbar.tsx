"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

function Navbar() {
  const pathName = usePathname();

  const navLinks = [
    {
      href: "/",
      title: "صفحه اصلی",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
  ];

  return (
    <nav className="shadow-xl p-4">
      <Container>
        <div className="flex flex-row gap-4">
          {navLinks.map((item) => (
            <Link
              className={`${pathName === item.href ? "text-sky-500" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
