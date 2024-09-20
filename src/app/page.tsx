import Footer from '@/components/landing/Footer'
import HeroSection from '@/components/landing/HeroSection'
import Navbar from '@/components/landing/Navbaar'
import Pricing from '@/components/landing/Pricing'
import React from 'react'
import { authOptions, CustomSession } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'


export default async function App() {
  const session: CustomSession | null = await getServerSession(authOptions)
  return (
    <main>
      
       <HeroSection>
        <Navbar user={session?.user} />
       </HeroSection>
      <Pricing user={session?.user} />
      <Footer />
    </main>
  );
}