//import { IOverviewSummaryResponse } from "./overviewSummaryResponse.model";
import { TermDefinitionResponse } from "./termsDefinitionResponse.model";

export interface IOverviewResponse
{
    RawInput: TermDefinitionResponse[];
    //OpenAIResponse: IOverviewSummaryResponse;
    OpenAIResponse: string;
}