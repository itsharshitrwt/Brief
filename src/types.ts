type CoinsType = {
    coins:number
}

type AddUrlErrorType = {
    url?: string;
    user_id?: string;
}

type SummaryType = {
  
    id: string;
    user_id: number;
    title: string;
    url: string;
    response?: string | null;
    created_at: Date;
}