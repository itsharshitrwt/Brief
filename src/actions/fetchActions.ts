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

//for coins .... and caching