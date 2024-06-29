"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <nav className="fixed top-0 flex w-full items-center justify-between border-b px-24 py-4">
      <div className="logo">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold tracking-tighter">Logo</h1>
        </Link>
      </div>
      <div className="menu flex items-center gap-4">
        <Link href={"/docs"}>
          <span className="text-lg font-medium text-muted-foreground transition duration-100 hover:text-slate-900">
            Docs
          </span>
        </Link>
        {status !== "authenticated" ? (
          <Button asChild>
            <Link href={"/auth/login"}>Login</Link>
          </Button>
        ) : (
          <Button
            onClick={() => {
              signOut({ callbackUrl: "/auth/login" });
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
