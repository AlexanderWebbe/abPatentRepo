export interface IClaimsResponse
{
    rawInput: string;
    openAIResponse: [ITerm];
}

export interface ITerm {
    term: string;
}