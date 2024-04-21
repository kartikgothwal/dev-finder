import { db } from "@/db";
import React from "react";

const Page = async () => {
    const data = await db.query.users.findMany();
    console.log("🚀 ~ Page ~ data:", data)
    
  return (
    <>
      <ul>
        <li>Hello world i am here
        </li>
      </ul>
    </>
  );
};

export default Page;
