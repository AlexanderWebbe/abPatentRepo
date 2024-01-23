import { ITerms } from "./terms.model";

export interface IClaimsResponse
{
    rawInput: string;
    openAIResponse: ITerms;
}