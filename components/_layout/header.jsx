"use client";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const session = useSession();

  return (
    <div>
      <ModeToggle />
      {session.data ? (
        <Button onClick={() => signOut()}>Sign out</Button>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </div>
  );
};

export default Header;
