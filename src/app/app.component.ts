import { Component, OnInit } from '@angular/core';
import { IDraft } from './models/draft.model';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>{{pageTitle}}</h1>
              <!-- <ab-history></ab-history> -->
              <hr/>
              <h1>Patent Draft Form</h1>
              <mat-stepper orientation="vertical" [linear]="true">
                <mat-step label="Fill out your claims">
                  <ab-claims [claims]="draft.userClaims" (getOpenAITerms)="addToDraft($event)"></ab-claims>
                </mat-step>
                <mat-step label="Review your claim terms">
                  <ab-terms></ab-terms>
                </mat-step>
                <mat-step label="Review your claim term definitions">
                  <ab-termDefinitions></ab-termDefinitions>
                </mat-step>
              </mat-stepper>
            </div>
            <hr/>
            {{draft.userClaims}}
            <hr/>
            {{draft.openAITerms}}
            <hr/>
            {{draft.userTerms}}
            `,
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Alston & Bird - Draft (Patent Draft Copilot) [Version: 2024-01-22]';
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
      openAITerms: 'Empty Open AI Term',
      userClaims: 'Empty user claims',
      userOverview: 'Empty user overview',
      userTermDefinitions: 'Empty user term definitions',
      userTerms: 'Empty user terms'
    }
  }

  ngOnInit(): void {
    //Initialize draft object
  }

  addToDraft(openAITerms: string) {
    console.log(`Add to Draft Object: ${openAITerms}`);
    this.draft.openAITerms = openAITerms;
    this.draft.userTerms = openAITerms;
  }

}
