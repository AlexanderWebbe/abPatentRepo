import { IClaimsTermsResponse } from "./claimsTermsResponse.model";

export interface IClaimsResponse
{
    RawInput: string;
    OpenAIResponse: IClaimsTermsResponse;
}