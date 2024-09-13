"use client";
import React from "react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "../common/ProfileDropdown";
export default async function DashNav({
  user,
  userCoins,
}: {
  user: CustomUser;
  userCoins: CoinsType | null;
}) {
  return (
    <nav className="w-full flex justify-between items-center h-12 p-2">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" width={40} height={40} alt="lgo" />
          <h1 className="text-2xl font-extrabold ">Brief</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2 items-center">
          <span className="text-xl font-bold">{userCoins?.coins ?? 0}</span>
          <Image src="/images/404.png" width={30} height={30} alt="coin" />
        </div>
        <ProfileDropdown user={user}/>
      </div>
    </nav>
  );
}