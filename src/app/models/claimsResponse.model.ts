import { ITerm } from "./term.model";

export interface IClaimsResponse
{
    rawInput: string;
    openAIResponse: Array<ITerm>;
}