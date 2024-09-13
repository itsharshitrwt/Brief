import DashNav from '@/components/dashboard/navDash'
import { getServerSession} from 'next-auth'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getUserCoins } from '@/actions/fetchActions'
import UrlInput from '@/components/dashboard/UrlInput'

export default async function dashboard(){
    const session: CustomSession | null = await getServerSession(authOptions)
    const userCoins = await getUserCoins(session?.user?.id!)
    return (
        <div className='container'>
            <DashNav user={session?.user!} userCoins={userCoins}/>
            <UrlInput/>
        </div>
      )
}