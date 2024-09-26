"use client";
import Link from "next/link";
import React from "react";
type SummaryType = {
  
  id: string;
  user_id: number;
  title: string;
  url: string;
  response?: string | null;
  created_at: Date;
}
export default function OldSummaryCard({
  summary,
}: {
  summary: SummaryType;
}) {
  return (
    <div className="bg-black text-white shadow-md p-10 h-42">
      <h1 className="text-lg font-semibold">{summary.title}</h1>
      <Link href={`/summarize?id=${summary.id}`}>
        <h1 className="border 1 border-white rounded-lg p-2 hover:bg-gray-900">{summary.url}</h1>
      </Link>
      <p className="mt-2">
        Created At :- {new Date(summary.created_at).toDateString()}
      </p>
    </div>
  );
}