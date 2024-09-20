"use server"
import prisma from "@/lib/db.config";
import { revalidateTag } from "next/cache";

export async function minusCoins(user_id:number|string):Promise<void> {
    await prisma.user.update({
        where:{
            id:Number(user_id)
        },
        data:{
            coins:{
                decrement: 20,
            },
        },
    });
}

export async function addCoins(user_id:number|string, coins:number):Promise<void> {
    await prisma.user.update({
        where:{
            id:Number(user_id)
        },
        data:{
            coins:{
                increment: coins,
            },
        },
    });
}

export async function coinsSpend(user_id:number|string, summary_id:string):Promise<void> {
    await prisma.coinsSpend.create({
        data:{
            user_id: Number(user_id),
            summary_id: summary_id,
        },
    });
}


export async function updateSummary(data: string, id:string):Promise<void> {
    await prisma.summary.update({
        data:{
            response:data,
        },
        where:{
            id:id,
        },
    });
}


export async function clearCache(key:string){
    revalidateTag(key)
}