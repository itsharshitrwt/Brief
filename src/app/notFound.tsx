"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="h-[90vh] flex justify-center items-center flex-col">
      <Image src="/images/404.png" width={500} height={500} alt="404" />
      <Link href="/">
        <Button className="bg-white text-black">Back to Home</Button>
      </Link>
    </div>
  );
}