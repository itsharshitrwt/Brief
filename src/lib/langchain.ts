import {ChatGroq} from "@langchain/groq"


export const groqmodal = new ChatGroq({
    apiKey: process.env.GROP_API_KEY,
    model:"llama3-8b-8192",
    temperature: 0.4,
    streaming: true,
    maxTokens: 7900,
})

//grog model