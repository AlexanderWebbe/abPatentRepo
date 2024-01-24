import { Component, OnInit } from '@angular/core';
import { IDraft } from './models/draft.model';
import { IClaimsResponse } from './models/claimsResponse.model';
//import { ITerm } from "./models/term.model";

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>{{pageTitle}}</h1>
              <!-- <ab-history></ab-history> -->
              <hr/>
              <h1>Patent Draft Form</h1>
              <mat-stepper orientation="vertical" [linear]="true">
                <mat-step label="Fill out your claims">
                  <ab-claims [claims]="draft.userClaims" (getOpenAITerms)="addTermToDraft($event)"></ab-claims>
                </mat-step>
                <mat-step label="Review your claim terms">
                  <ab-terms [terms]="draft.userTerms" (getOpenAITermDefinitions)="addTermDefinitionToDraft($event)"></ab-terms>
                </mat-step>
                <mat-step label="Review your claim term definitions">
                  <ab-termDefinitions [termDefinitions]="draft.userTermDefinitions"></ab-termDefinitions>
                </mat-step>
                <mat-step label="Review your claim term definitions overview">
                  <ab-overview></ab-overview>
                </mat-step>
                <mat-step label="Summary">
                  <ab-summary [draft]="draft"></ab-summary>
                </mat-step>
              </mat-stepper>
            </div>
            `,
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Alston & Bird - Draft (Patent Draft Copilot) [Version: 2024-01-24]';
  //TODO: Create a object that contains user claims, open ai/user terms and open ai/user term definitions.  This will allow me to push data between
  //  components and have a summary display screen
  // Parent to child binds on data
  // Child to parent uses an event to emit changes
  draft: IDraft;

  constructor() {
    this.draft = {
      user: 'Alex',
      date: '2024-01-22',
      openAIOverview: '',
      openAITermDefinitions: '',
      openAITerms: null,
      userClaims: '',
      userOverview: '',
      userTermDefinitions: '',
      userTerms: null
    }
  }

  ngOnInit(): void {
    //Initialize draft object
  }

  addTermToDraft(claimsResponse: IClaimsResponse) {
    console.log(`Add to Draft Object: ${JSON.stringify(claimsResponse.openAIResponse)}`);
    this.draft.userClaims = claimsResponse.rawInput;

    this.draft.openAITerms = claimsResponse.openAIResponse.Terms;
    this.draft.userTerms = claimsResponse.openAIResponse.Terms;
  }

  addTermDefinitionToDraft(openAITermDefinitions: string) {
    console.log(`Add to Draft Object: ${openAITermDefinitions}`);
    this.draft.openAITermDefinitions = openAITermDefinitions;
    this.draft.userTermDefinitions = openAITermDefinitions;
  }

}