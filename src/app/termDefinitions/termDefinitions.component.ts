import { Component } from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

@Component({
    selector: 'ab-termDefinitions',
    styleUrls: ['./termDefinitions.component.css'],
    templateUrl: './termDefinitions.component.html'
})
export class TermDefinitionsComponent {
    pageTitle: string = "Term Definitions";
    termDefinitions: string = '';
    termDefinitionsError: boolean = false;
    termDefinitionsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    constructor(private clipboard: Clipboard, private http: HttpClient) {}

    processTermDefinitions() {

        // Validate Input

        // Provide input to Cognative API

        // Provide an output to be provided to the next step
        console.log(`Process Term Definitions: ${this.termDefinitions}`);

        this.http.post('/api/TermDefintions', { rawInput: this.termDefinitions}).subscribe(data => {
            console.log(`POSTED Term Definitions: ${this.termDefinitions}`);
            console.log(`POSTED Term Definitions Response: ${data}`);

            // TODO:  Populate patent claim term definitions field
            
        })

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
        // this.clipboard.copy(this.termDefinitions);

        const pending = this.clipboard.beginCopy(this.termDefinitions);
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