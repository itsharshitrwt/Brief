"use client"
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
export default function HeroSection({ children }: { children: React.ReactNode}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header style={{ backgroundImage: `url('https://wallpapers.com/images/hd/pure-black-background-zf3z6sqcvhjgev6l.jpg')` }} className="py-24 text-center bg-black " >
      {children}

      <motion.div 
          className="mb-10 mt-52 md:text-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="md:text-6xl text-4xl font-extrabold text-blue-600 md:mt-0 mt-[-30%]">
            Brief : <span className="text-white md:text-6xl text-4xl font-bold ">your on the go 🚀<br></br>text based AI video Summarizer</span>
          </h1>
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Summarize Any Podcast </span><span className="text-blue-600">Instantly 😉</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          Use AI to get <span className="">concise summaries</span> and <span className="">top questions</span> from your favorite podcasts.
        </motion.p>
        <motion.p 
          className="text-xl text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <span className="font-bold">Discover</span> new insights and <span className="">actionable takeaways</span> from your favorite podcasts.
        </motion.p>
        <motion.p 
          className="text-xl text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.9 }}
        >
          <span className="font-bold">Save time</span> and <span className="">boost productivity</span> with our AI-powered podcast summaries.
        </motion.p>
     
      <div className="mt-2">
        <Link href={"/dashboard"}>
        <Button className="mt-4 w-40 text-white bg-blue-600 hover:bg-blue-700 rounded-3xl font-semibold">Try for free</Button>
        </Link>
      </div>
      <br></br>
      <div className="flex flex-wrap justify-center md:flex-no-wrap md:mx-4 lg:mx-12 xl:mx-24 mt-44">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6 md:mt-0  mt-[-50px]">
  <h2 className="text-3xl font-bold mb-4 text-blue-600 flex text-left">
    Get the Instant Summary of <br></br>long hashty podcasts  😌
  </h2>
  <p className="text-lg text-white text-left">
    Instantly get the gist of long podcasts with our AI-powered summaries, perfect for busy individuals short on time.
  </p>
  <p className="text-lg text-white text-left">
    No more tedious listening or reading - our AI summarizes the key points for you, saving you time and effort.
  </p>
</div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-6">
          
          <video width="100%" controls autoPlay muted  className="rounded-lg w-full sm:ml-10">
            <source src="/videos/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </div>

    <div className="flex flex-wrap justify-center md:flex-no-wrap md:mx-4 lg:mx-12 xl:mx-24 mt-44 ">
      
        <div className="w-full md:w-1/2 xl:w-2/3 p-6 md:ml-[-70px] m-auto">
          
          <video width="100%" controls autoPlay muted  className="rounded-lg w-full sm:ml-10">
            <source src="/videos/main2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 flex text-left">
          Enjoy your Old Summaries<br></br> for free 😌
        </h2>
          <p className="text-lg text-white text-left"> Revisit all the summaries you have previously created without spending a single coin! Just log in to your account, and you will have instant access to your saved summaries, allowing you to review them 
  quickly and efficiently</p>
          <p className="text-lg text-white text-left">Enjoy the convenience of accessing your summaries at any time, ensuring that you can refresh 
          your memory at lightning speed—no fees, no hassle!</p>
        </div>
    </div>

    <div className="">
      <h1 className="text-white text-5xl font-bold mt-32">Menu</h1>
      <img src="/images/menu.png" alt="images" className="w-[80%] h-[80%] m-auto rounded-2xl mt-10"/>
    </div>
    
    </header>
    
    
    
    </>
   
    
  );
}