export interface IDraft {
    user: string;
    date: string; //Date;

    //Step 1:  User enters claims
    userClaims: string;
    //Step 2:  Open AI returns terms based on inputted claims
    openAITerms: string;
    //Step 3:  User can alter terms
    userTerms: string;
    //Step 4:  Open AI returns term definitions based on inputted terms
    openAITermDefinitions: string;
    //Step 5:  User can alter term definitions
    userTermDefinitions: string;
    //Step 6:  Open AI returns overview based on term definitions
    openAIOverview: string;
    //Step 7:  User can alter overview
    userOverview: string;
}