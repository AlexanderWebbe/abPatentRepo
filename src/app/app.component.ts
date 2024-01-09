import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>{{pageTitle}}</h1>
              <!-- <ab-history></ab-history> -->
              <hr/>
              <h1>Patent Form</h1>
              <mat-stepper orientation="vertical" [linear]="true">
                <mat-step label="Fill out your claims">
                  <ab-claims></ab-claims>
                </mat-step>
                <mat-step label="Review your claim terms">
                  <ab-terms></ab-terms>
                </mat-step>
                <mat-step label="Review your claim term definitions">
                  <ab-termDefinitions></ab-termDefinitions>
                </mat-step>
              </mat-stepper>
            </div>`,
})
export class AppComponent {
  pageTitle = 'Alston & Bird - Patent Copilot';
}
