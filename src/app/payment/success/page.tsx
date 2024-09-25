import { addCoins, clearCache } from '@/actions/commonActions'
import prisma from '@/lib/db.config'
import { getCoinsFromAmount } from '@/lib/utils'
import { notFound } from 'next/navigation'
import React from 'react'
import Image from "next/image"; 


export default async function SuccessTxn({
    searchParams,
}:{
    searchParams:{[key:string]:string | undefined}}){
        if (!searchParams["txnId"]) {
            // handle the case where searchParams["txnId"] is undefined
            return notFound();
        }

        const transaction = await prisma.transactions.findUnique({
            where:{
                status:2,
                id: searchParams?.["txnId"],  
                
            }
        })
        if(!transaction){
            return notFound()
        }
        await prisma.transactions.update({
            data:{
                status:1
            },
            where:{
                id:searchParams?.["txnId"],
            }
        })

        await addCoins(transaction.user_id , getCoinsFromAmount(transaction.amount))
        clearCache("userCoins")
        clearCache("transactions")
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <Image src="/images/success.png" width={512} height={512} alt="success" />
        <h1 className='mt-10 text-3xl font-bold'>Payment Processed Successfully</h1>
    </div>
  )
}
