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

export default function HeroSection({ children }: { children: React.ReactNode}) {
  return (
    <>
      <header style={{ backgroundImage: `url('https://wallpapers.com/images/hd/pure-black-background-zf3z6sqcvhjgev6l.jpg')` }} className="py-24 text-center bg-black" >
      {children}
      <div className="mb-10 mt-52 md:text-2xl">
      <h1 className="text-6xl font-extrabold text-blue-600">Brief : <span className="text-white text-6xl font-bold ">your on the go 🚀<br></br>text based AI video Summarizer</span></h1>
      </div>
      <h1 className="text-4xl font-bold">
        <span className="text-white">Summarize  Any Podcast </span><span className="text-blue-600">Instantly 😉</span>
      </h1>
      <p className="text-xl text-white">
        Use AI to get <span className="">concise summaries</span> and <span className="">top questions</span> from your favorite podcasts.
      </p>
      <p className="text-xl text-white">
        <span className="font-bold">Discover</span> new insights and <span className="">actionable takeaways</span> from your favorite podcasts.
      </p>
      <p className="text-xl text-white">
        <span className="font-bold">Save time</span> and <span className="">boost productivity</span> with our AI-powered podcast summaries.
      </p>
      <div className="mt-2">
        <Button className="mt-4 w-40 text-white bg-blue-600 hover:bg-blue-700 rounded-3xl font-semibold">Try for free</Button>
      </div>
      <br></br>
      <div className="flex flex-wrap justify-center md:flex-no-wrap md:mx-4 lg:mx-12 xl:mx-24 mt-44">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 flex">
          Get the Instant Summary of <br></br>long hashty podcasts  😌
        </h2>
          <p className="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p className="text-lg text-white">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-6">
          
          <video width="100%" controls autoPlay muted  className="rounded-lg w-full sm:ml-10">
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </div>

    <div className="">
      <h1 className="text-white text-5xl font-bold mt-32">Menu</h1>
      <img src="/images/dashboard.png" alt="images" className="w-[80%] h-[80%] m-auto rounded-2xl mt-10"/>
    </div>
    
    </header>
    
    
    
    </>
   
    
  );
}