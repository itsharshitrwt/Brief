"use client"

import React from "react"

export default function UrlInput(){
    const handleSubmit = (event:React.FormEvent)=>{
       event.preventDefault()
    }
    return (
        <div className="flex justify-center items-center mt-10 w-full">
            <form onSubmit={handleSubmit} className="relative w-full md:w-[500px]">
              <input type="url" className="w-full md:w-[500px] h-12 rounded-lg ng-muted border border-purple-600 border-dashed"/>
            </form>
        </div>
    )
}