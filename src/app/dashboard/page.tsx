import DashNav from '@/components/dashboard/navDash'
import { getServerSession} from 'next-auth'
import React from 'react'
import { authOptions, CustomSession, CustomUser } from '../api/auth/[...nextauth]/options'
import { getOldSummaries, getUserCoins } from '@/actions/fetchActions'
import UrlInput from '@/components/dashboard/UrlInput'
import OldSummaryCard from '@/components/dashboard/OldSummaryCard'

export default async function dashboard(){
    const session: CustomSession | null = await getServerSession(authOptions)
    const userCoins = await getUserCoins(session?.user?.id?? '')
    const oldSummaries = await getOldSummaries(session?.user?.id?? '')
    return (
        <div className='container'>
            <DashNav user={session?.user as CustomUser} userCoins={userCoins}/>
            <UrlInput user={session?.user as CustomUser}/>
            <div className='mt-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {oldSummaries && oldSummaries.length>0 && oldSummaries.map((item , index)=>(
                        <OldSummaryCard summary={item} key={index}/>
                    ))}
                </div>
            </div>
        </div>
      )
}