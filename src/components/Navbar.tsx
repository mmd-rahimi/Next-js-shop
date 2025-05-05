"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { UseCartContext } from "@/contexts/CartContext";

function Navbar() {
  const pathName = usePathname();
  const {cartTotalQty} = UseCartContext()

  const navLinks = [
    {
      href: "/",
      title: "صفحه اصلی",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
    {
      href: "/cart",
      title: "سبد خرید",
    },
  ];

  return (
    <nav className="shadow-xl p-4">
      <Container>
        <div className="flex flex-row justify-between">
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
          <Link href="/cart" className={`flex flex-row p-1`}>
            <h3 className="ml-1">سبد خرید</h3>
            <span>({cartTotalQty})</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
