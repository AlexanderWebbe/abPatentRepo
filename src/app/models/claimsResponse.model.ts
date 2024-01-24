import { IClaimsTermsResponse } from "./claimsTermsResponse.model";

export interface IClaimsResponse
{
    rawInput: string;
    openAIResponse: IClaimsTermsResponse;
}