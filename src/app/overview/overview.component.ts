import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

@Component({
  selector: 'ab-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  pageTitle: string = "Overview";
  @Input() overview: string;
  overViewError: boolean = false;
  overViewErrorMessage: string = 'Placeholder for general errors raised from the REST API';

  constructor(private clipboard: Clipboard, private http: HttpClient) {}

  ngOnInit(): void {
  }

  processOverview() {

    // Validate Input

    /*
    console.log(`Process Terms: ${this.terms}`);

    // Provide input to Cognative API
    this.http.post('/api/Terms', { rawInput: this.terms}).subscribe((data: ITermsResponse) => {
        console.log(`POSTED Terms: ${this.terms}`);
        console.log(`POSTED RESPONSE Term Definitions: ${data.openAIResponse}`);

        // Provide an output to be provided to the next step
        this.getOpenAITermDefinitions.emit(data.openAIResponse);            
    })
    */

  }

  previousDraftOnClick() {
    console.log('TODO:  Previous Draft');
    console.log('TODO:  Azure SQL Storage is required to flip between drafts');
  }

  nextDraftOnClick() {
    console.log("TODO:  Next Draft");
    console.log('TODO:  Azure SQL Storage is required to flip between drafts');
  }

  copyDraftOnClick() {
    console.log("Copy Draft");

    // Copying large amounts of data can take time and requires async method
    // this.clipboard.copy(this.terms);

    const pending = this.clipboard.beginCopy(this.overview);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }

  refreshDraftOnClick() {
    console.log("TODO:  Refresh Draft");
    console.log('TODO:  Azure SQL Storage is required to flip between drafts');
  }

}
