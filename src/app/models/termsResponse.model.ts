import { TermsOpenAIResponse } from "./termsOpenAIResponse.model";

export interface ITermsResponse {
    RawInput: string;
    OpenAIResponse: TermsOpenAIResponse;
}