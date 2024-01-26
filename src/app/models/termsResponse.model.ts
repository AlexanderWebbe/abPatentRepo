import { TermsOpenAIResponse } from "./termsOpenAIResponse.model";

export interface ITermsResponse {
    rawInput: string;
    openAIResponse: TermsOpenAIResponse;
}