import { TermDefinitionResponse } from "./termsDefinitionResponse.model";

export interface IOverviewResponse
{
    RawInput: TermDefinitionResponse[];
    OpenAIResponse: IOpenAIOverviewResponse;
}

export interface IOpenAIOverviewResponse
{
    Overview: string;
}