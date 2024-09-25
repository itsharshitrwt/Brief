import {clearCache } from '@/actions/commonActions'
import prisma from '@/lib/db.config'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function CancelTxn({
    searchParams,
}:{
    searchParams:{[key:string]:string | undefined}}){

        const transaction = await prisma.transactions.findUnique({
            where:{
                status:2,
                id:searchParams["txnId"],  
                
            }
        })
        if(!transaction){
            return notFound()
        }
        await prisma.transactions.update({
            data:{
                status:0
            },
            where:{
                id: searchParams["txnId"],
            }
        })

        
        clearCache("transactions")
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <img src = "/images/cancel.png" width = {512} height = {512} alt= "cancel"/>
        <h1 className='mt-10 text-3xl font-bold'>Payment Cancelled</h1>
    </div>
  )
}
