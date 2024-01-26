import { TermDefinitionResponse } from "./termsDefinitionResponse.model";

export interface IOverviewResponse
{
    rawInput: TermDefinitionResponse[];
    openAIResponse: string;
}