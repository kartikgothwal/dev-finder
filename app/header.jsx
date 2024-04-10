"use client";
import React from "react";
import { ModeToggle } from "../components/mode-toggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const session = useSession();
  console.log("🚀 ~ Header ~ session:", session);

  return (
    <div>
      <ModeToggle />
      {session.data ? (
        <Button onClick={() => signOut("github")}>Sign out</Button>
      ) : (
        <Button onClick={() => signIn("github")}>Sign In</Button>
      )}
    </div>
  );
};

export default Header;
