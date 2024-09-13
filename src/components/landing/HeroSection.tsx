// import React from "react";
// import { Button } from "../ui/button";

// export default function HeroSection() {
//   return (
//     <header className="  py-24 text-center">
//       <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
//         Summarize Any Podcast Instantly
//       </h1>
//       <p className="text-xl">
//         Use AI to get concise summaries and top questions from your favorite
//         podcasts.
//       </p>
//       <div className="mt-2">
//         <Button className="mt-4 w-40">Try it Now</Button>
//       </div>
//     </header>
//   );
// }

import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <header className="py-24 text-center">
      <h1 className="text-4xl font-extrabold">
        <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Summarize</span> Any Podcast <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Instantly</span>
      </h1>
      <p className="text-xl">
        Use AI to get <span className="font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">concise summaries</span> and <span className="font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">top questions</span> from your favorite podcasts.
      </p>
      <p className="text-xl">
        <span className="font-bold">Discover</span> new insights and <span className="font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">actionable takeaways</span> from your favorite podcasts.
      </p>
      <p className="text-xl">
        <span className="font-bold">Save time</span> and <span className="font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">boost productivity</span> with our AI-powered podcast summaries.
      </p>
      <div className="mt-2">
        <Button className="mt-4 w-40">Try it Now</Button>
      </div>
    </header>
  );
}