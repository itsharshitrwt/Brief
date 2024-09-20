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

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoginModel from "../auth/LoginModel";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";

export default function Navbar({ user }: { user?: CustomUser }) {
  return (
    <div className="bg-white h-16 fixed w-96 mx-auto px-4 rounded-3xl mt-[-70px] md:w-[80%] md:ml-36">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center space-x-2 mt-[-12px]">
          <Image src="/images/logo.png" width={60} height={40} alt="logo" className="" />
          <h1 className="text-3xl font-extrabold md:text-5xl">Brief</h1>
        </div>

        <div className="space-x-4 mt-[-12px]">
          <Button variant="ghost">Pricing</Button>
          {user ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <LoginModel />
          )}
        </div>
      </div>
    </div>
  );
}