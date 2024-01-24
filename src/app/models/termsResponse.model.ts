import { ITerms } from "./terms.model";

export interface ITermsResponse
{
    rawInput: string;
    openAIResponse: ITerms;
}