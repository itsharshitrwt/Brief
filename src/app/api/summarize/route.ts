
import {NextRequest , NextResponse} from "next/server"
import { authOptions, CustomSession } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserCoins } from "@/actions/fetchActions";
import prisma from "@/lib/db.config";
import { coinsSpend, minusCoins, updateSummary } from "@/actions/commonActions";
import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import {Document} from "@langchain/core/documents" 
import {TokenTextSplitter} from "@langchain/textsplitters"
import {PromptTemplate} from "@langchain/core/prompts"
import { summaryTemplate } from "@/lib/prompts";
import {loadSummarizationChain} from "langchain/chains"
import { groqmodal } from "@/lib/langchain";

interface summarizePayload{
    url:string;
    id:string
}

export async function POST(request:NextRequest) {
    try{
        const session:CustomSession | null = await getServerSession(authOptions)
        if(!session){
            return NextResponse.json({
                message:"Unauthorized"
            },{status:401});
        }
        const body:summarizePayload = await request.json()
    
        const usercoins = await getUserCoins(session?.user?.id!);
        if(usercoins == null || (usercoins?.coins && usercoins?.coins<10)){
            return NextResponse.json({
                message:"Insufficient Coins"
            },{status:400});
        }


        //checking if url summary is already generated or not to avoid multiple use of ai

        const oldSummary = await prisma.summary.findFirst({
            where:{
                url:body.url
            }
        })

        if(oldSummary != null && oldSummary.response){
            await minusCoins(session?.user?.id!)
            await coinsSpend(session?.user?.id! , body.id)
            return NextResponse.json({
                message:"Video Summary ",
                data:oldSummary?.response
            })
        }
        //if not found then extract the transcipt
        let text:Document<Record<string , any>>[]

        try{
            const loader = YoutubeLoader.createFromUrl(body.url, {
                language: "en",
                addVideoInfo: true,
              });
              
            text = await loader.load();
        }catch(error){
            return NextResponse.json({
                message:"No Transcript Available for this Video Try another video"
            },{status: 400})
        }

        const splitter = new TokenTextSplitter({
            chunkSize: 5000,
            chunkOverlap: 250,
        })
        const docsSummary = await splitter.splitDocuments(text)
        const summaryPrompt = PromptTemplate.fromTemplate(summaryTemplate)
        const summaryChain = loadSummarizationChain 
        (groqmodal,  {
            type:"map_reduce",
            verbose: true,
            combinePrompt: summaryPrompt
        })

        const res = await summaryChain.invoke({input_documents:docsSummary})

        await minusCoins(session?.user?.id!)
        await coinsSpend(session?.user?.id! , body.id)
        await updateSummary(res?.text, body.id)
        return NextResponse.json({
            message:"PodCast Sumamry",
            data: res?.text,
        })

    }catch(error){
       return NextResponse.json({
        message:"Something went wrong....78"
       },{status:500})
    }
}

//3:11:00