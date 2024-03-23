"use client";
import Link from "next/link";
import React from "react";

const LINKS = [
  { name: "Questions", href: "/questions" },
  { name: "Answers", href: "/answers" },
  { name: "Users", href: "/users" },
  { name: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full shadow">
      <div className="max-w-6xl px-20 py-3 m-auto flex items-center justify-between">
        <div className="flex items-center gap-20">
          <Link className="title" href="/">
            extice
          </Link>
          <nav>
            <ul className="flex items-center gap-8 mt-1">
              {LINKS.map((links) => (
                <li key={links.href}>
                  <Link
                    className="hover:text-sky-500 duration-200"
                    href={links.href}
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Link
          className="text-white font-medium bg-sky-500 border border-blue-400 py-2 px-5 rounded-full hover:bg-sky-600 duration-200"
          href="/login"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}
