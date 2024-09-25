"use server"
import {prisma} from "@/lib/db.config"
import {unstable_cache} from "next/cache"

export const getUserCoins = unstable_cache(
    async(user_id:number|string)=>{
        return await prisma.user.findUnique({
            select:{
                coins:true
            },
            where:{
                  id:Number(user_id)
            }
        })
    },
    ["userCoins"],
    { revalidate: 60*60, tags:["userCoins"]}
)

export const getSummary = async (id:string)=>{
    const summary = await prisma.summary.findUnique({
        where:{
            id:id,
        },
    })
    return summary;
}   
//for coins .... and caching

export const getOldSummaries = unstable_cache(
    async(user_id:number|string)=>{
        return await prisma.summary.findMany({
            select:{
                id:true,
                url:true,
                title:true,
                created_at:true,
                user_id:true,
            },
            where:{
                user_id:Number(user_id)
            }
        })
    },
    ["oldSummaries"],
    { revalidate: 60*60, tags:["userCoins"]}
)


export const getCoinsSpend = unstable_cache(
    async(user_id:number|string)=>{
        return await prisma.coinsSpend.findMany({
            where:{
                user_id:Number(user_id)
            },
            include:{
                summary:{
                    select:{
                        id:true,
                        url:true,
                        title:true
                    }
                }
            },
            orderBy:{
                id:"desc"
            },
        })
    },
    ["coinsSpend"],
    { revalidate: 60*60, tags:["coinsSpend"]}
)