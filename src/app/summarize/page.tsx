import React from 'react'
import notFound from '../notFound'
import { getSummary, getUserCoins } from '@/actions/fetchActions'

import DashNav from '@/components/dashboard/navDash'
import { authOptions, CustomSession, CustomUser } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import SummaryBase from '@/components/summary/summaryBase'
export default async function Summarize({searchParams}:{searchParams:{[key:string]:string | undefined}}){

    if(!searchParams?.["id"]){
        return notFound()
    }
    type SummaryType = {
  
        id: string;
        user_id: number;
        title: string;
        url: string;
        response?: string | null;
        created_at: Date;
    }

    const summary:SummaryType | null = await getSummary(searchParams?.["id"])
    
    if(!summary){
        return notFound()
    }
    const session:CustomSession|null = await getServerSession(authOptions)
    const userCoins = await getUserCoins(session?.user?.id?? '')
    return(
        <div className='container'>
          <DashNav user={session?.user as CustomUser} userCoins={userCoins}/>
          <SummaryBase summary={summary}/>
        </div>
    )
}