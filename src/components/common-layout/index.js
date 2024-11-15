"use client";
import UserState, { UserContext } from "@/context";

function CommonLayout({ children }) {
  return <UserState>{children}</UserState>;
}

export default CommonLayout;
