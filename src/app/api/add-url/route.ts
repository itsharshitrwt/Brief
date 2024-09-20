import { getToken } from "next-auth/jwt";
import prisma from "@/lib/db.config";
import vine , {errors} from "@vinejs/vine"
import { NextRequest , NextResponse } from "next/server";
import { summarySchema } from "@/validations/summaryValidation";
import { getUserCoins } from "@/actions/fetchActions";
import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import {Document} from "@langchain/core/documents"

export async function POST(req:NextRequest) {
    try{
        // const token = await getToken({req})
        // if(!token){
        //     return NextResponse.json({message:"Unauthorized user "}, {status: 401})
        // }
        const body = await req.json();
        const validator = vine.compile(summarySchema)
        const payload = await validator.validate(body)

        const usercoins = await getUserCoins(payload.user_id)
        if(usercoins == null || (usercoins?.coins && usercoins?.coins <10)){
            return NextResponse.json({
                   message:"Insufficient Coins"
            }, {status: 400})
        }

        let text:Document<Record<string , any>>[]

        try{
            const loader = YoutubeLoader.createFromUrl(payload.url, {
                language: "en",
                addVideoInfo: true,
              });
              
            text = await loader.load();
        }catch(error){
            return NextResponse.json({
                message:"No Transcript Available for this Video Try another video"
            },{status: 400})
        }


        const summary = await prisma.summary.create({
            data:{
                ...payload,
                user_id:Number(payload.user_id),
                title:text[0].metadata?.title ?? "404 brief title error"
            }
        })

        return NextResponse.json({
            message:"Url added succesfully",
            data: summary
        })


    }catch(error){
        console.log("The error is", error);
        if(error instanceof errors.E_VALIDATION_ERROR){
            return NextResponse.json({
                message:"Plz check validation errors",
                errors:error.messages
            }, {status: 422})
        }
        return NextResponse.json({message:"Something went wrong"}, {status: 500})
    }
}