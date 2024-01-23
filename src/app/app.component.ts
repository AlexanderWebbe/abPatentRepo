import { Component, OnInit } from '@angular/core';
import { IDraft } from './models/draft.model';
import { IClaimsResponse } from './models/claimsResponse.model';

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
              </mat-stepper>
            </div>
            <hr/>
            User Claims:  {{draft.userClaims}}
            <hr/>
            Open AI Terms: {{draft.openAITerms}}
            <hr/>
            User Terms: {{draft.userTerms}}
            <hr/>
            Open AI Term Definitions: {{draft.openAITermDefinitions}}
            <hr/>
            User Term Definitions: {{draft.userTermDefinitions}}
            `,
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Alston & Bird - Draft (Patent Draft Copilot) [Version: 2024-01-23 2:01 PM]';
  //TODO: Create a object that contains user claims, open ai/user terms and open ai/user term definitions.  This will allow me to push data between
  //  components and have a summary display screen
  // Parent to child binds on data
  // Child to parent uses an event to emit changes
  draft: IDraft;

  constructor() {
    this.draft = {
      user: 'Alex',
      date: '2024-01-22',
      openAIOverview: 'Empty Open AI Overview',
      openAITermDefinitions: 'Empty Open AI Term Definitions',
      openAITerms: '',
      userClaims: '',
      userOverview: 'Empty user overview',
      userTermDefinitions: 'Empty user term definitions',
      userTerms: ''
    }
  }

  ngOnInit(): void {
    //Initialize draft object
  }

  addTermToDraft(claimsResponse: IClaimsResponse) {
    console.log(`Add to Draft Object: ${claimsResponse.openAIResponse}`);
    this.draft.userClaims = claimsResponse.rawInput;
    //this.draft.openAITerms = claimsResponse.openAIResponse;
    //this.draft.userTerms = claimsResponse.openAIResponse;
  }

  addTermDefinitionToDraft(openAITermDefinitions: string) {
    console.log(`Add to Draft Object: ${openAITermDefinitions}`);
    this.draft.openAITermDefinitions = openAITermDefinitions;
    this.draft.userTermDefinitions = openAITermDefinitions;
  }

}
