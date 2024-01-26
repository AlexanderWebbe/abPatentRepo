import { TermDefinitionResponse } from "./termsDefinitionResponse.model";

export interface IOverviewResponse
{
    RawInput: TermDefinitionResponse[];
    OpenAIResponse: string;
}