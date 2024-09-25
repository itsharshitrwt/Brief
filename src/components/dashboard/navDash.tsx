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
    <nav className="bg-black h-20 p-4 flex justify-between items-center  rounded-b-3xl">
  <Link href="/">
    <div className="flex items-center space-x-4">
      <Image src="/images/logo.png" className="bg-transparent bg-contain" width={60} height={60} alt="logo" />
      <h1 className="text-4xl font-extrabold text-blue-600">Brief</h1>
    </div>
  </Link>
  <div className="flex items-center space-x-6">
    <div className="flex space-x-4 items-center">
      <span className="text-3xl font-bold  text-white">{userCoins?.coins ?? 0}</span>
      <Image src="/images/coins.png" width={70} height={40} alt="coin" className= "bg-transparent bg-contain" />
    </div>
    <ProfileDropdown user={user} />
  </div>
</nav>
  );
}
