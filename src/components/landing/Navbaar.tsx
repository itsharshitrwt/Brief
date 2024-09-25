// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import LoginModel from "../auth/LoginModel";
// import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
// import Link from "next/link";

// export default function Navbar({ user }: { user?: CustomUser }) {
//   return (
//     <div className=" bg-white h-16 ml-36 fixed w-[80%] px-4 rounded-3xl mt-[-70px]">
//       <div className="container mx-auto flex justify-between items-center p-6 ">
//         <div className="flex items-center space-x-2 mt-[-12px]">
//           <Image src="/images/logo.png" width={60} height={40} alt="logo" className="" />
//           <h1 className="text-5xl font-extrabold ">Brief</h1>
//         </div>

//         <div className="space-x-4 mt-[-12px]">
//           <Button variant="ghost">Pricing</Button>
//           {user ? (
//             <Link href="/dashboard">
//               <Button>Dashboard</Button>
//             </Link>
//           ) : (
//             <LoginModel />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModel from "../auth/LoginModel";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";

export default function Navbar({ user }: { user?: CustomUser }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white h-16 fixed w-96 mx-auto px-4 rounded-3xl mt-[-70px] md:w-[80%] md:ml-36">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center space-x-2 mt-[-12px]">
          <Image src="/images/logo.png" width={60} height={40} alt="logo" className="" />
          <h1 className="text-3xl font-extrabold md:text-5xl">Brief</h1>
        </div>

        <div className="hidden md:flex space-x-4 mt-[-12px]">
          <Link href="">
          <Button variant="ghost">Pricing</Button>
          </Link>
          {user ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <LoginModel />
          )}
        </div>

        {/* Add menu icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black hover:text-gray-900 transition duration-300 ease-in-out bg-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="inline-block w-6 h-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </span>
          </button>
          {showMenu && (
            <ul 
            className="absolute right-0 mt-2 w-48 rounded-md shadow-md transition duration-300 ease-in-out"
      style={{
        opacity: showMenu ? 1 : 0,
        transform: showMenu ? 'translateY(0)' : 'translateY(-100%)',
      }}
            >
              <li>
                <Button variant="ghost">Pricing</Button>
              </li>
              {user ? (
                <li>
                  <Button>Logout</Button>
                </li>
              ) : (
                <li>
                  <LoginModel />
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}


