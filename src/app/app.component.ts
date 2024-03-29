import { Component, OnInit } from '@angular/core';
import { IDraft } from './models/draft.model';
import { IClaimsResponse } from './models/claimsResponse.model';
import { ITermsResponse } from './models/termsResponse.model';
import { IOverviewResponse } from './models/overviewResponse.model';

@Component({
  selector: 'app-root',
  template: `<div>
                <div class="header">
                  <img src="/assets/ABdraft_logo.png" alt="ABdraft Header Image" />
                </div>
                <h1 class="subHeader">Patent Claim Definition & Summary Tool</h1>
                <mat-stepper orientation="vertical" [linear]="true">
                  <mat-step label="Fill out your claims">
                    <ab-claims [claims]="draft.userClaims" (getOpenAITerms)="addTermToDraft($event)"></ab-claims>
                  </mat-step>
                  <mat-step label="Review your claim terms">
                    <ab-terms [terms]="draft.userTerms" (getOpenAITermDefinitions)="addTermDefinitionToDraft($event)"></ab-terms>
                  </mat-step>
                  <mat-step label="Review your claim term definitions">
                    <ab-termDefinitions [termDefinitions]="draft.userTermDefinitions" (getOpenAIOverview)="addOverviewToDraft($event)"></ab-termDefinitions>
                  </mat-step>
                  <mat-step label="Review your claim term definitions overview">
                    <ab-overview [overview]="draft.userOverview"></ab-overview>
                  </mat-step>
                  <mat-step label="Summary">
                    <ab-summary [draft]="draft"></ab-summary>
                  </mat-step>
                </mat-stepper>
              </div>
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-2">
                  Model name: gpt-35-turbo-16k
                </div>
                <div class="col-md-2">
                  Model version: 0613
                </div>
                <div class="col-md-4"></div>
              </div>
            `,
})
export class AppComponent implements OnInit {
  
  // Create a object that contains user claims, open ai/user terms and open ai/user term definitions.  This will allow me to push data between
  // components and have a summary display screen
  //    - Parent to child binds on data
  //    - Child to parent uses an event to emit changes
  
  draft: IDraft;

  constructor() {
    this.draft = {
      user: 'Alex',
      date: '2024-01-22',
      openAIOverview: '',
      openAITermDefinitions: null,
      openAITerms: null,
      userClaims: '',
      userOverview: '',
      userTermDefinitions: null,
      userTerms: null
    }
  }

  ngOnInit(): void {
    //Initialize draft object
  }

  addTermToDraft(claimsResponse: IClaimsResponse) {
    console.log(`Add to Draft Object: ${JSON.stringify(claimsResponse.OpenAIResponse)}`);
    this.draft.userClaims = claimsResponse.RawInput;

    this.draft.openAITerms = claimsResponse.OpenAIResponse.Terms;
    this.draft.userTerms = claimsResponse.OpenAIResponse.Terms;
  }

  addTermDefinitionToDraft(termsReponse: ITermsResponse) {
    console.log(`Add to Draft Object: ${JSON.stringify(termsReponse.OpenAIResponse)}`);
    this.draft.openAITermDefinitions = termsReponse.OpenAIResponse.TermDefinitions;
    this.draft.userTermDefinitions = termsReponse.OpenAIResponse.TermDefinitions;
  }

  addOverviewToDraft(overviewResponse: IOverviewResponse) {
    console.log(`Add to Draft Object: ${JSON.stringify(overviewResponse)}`);
    this.draft.openAIOverview = overviewResponse.openAIResponse;
    this.draft.userOverview = overviewResponse.openAIResponse;
  }

}