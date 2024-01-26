import { Component, EventEmitter, Input, Output } from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { IOverviewResponse } from "../models/overviewResponse.model";
import { TermDefinitionResponse } from "../models/termsDefinitionResponse.model";

@Component({
    selector: 'ab-termDefinitions',
    styleUrls: ['./termDefinitions.component.css'],
    templateUrl: './termDefinitions.component.html'
})
export class TermDefinitionsComponent {
    pageTitle: string = "Term Definitions";
    @Input() termDefinitions: TermDefinitionResponse[];
    termDefinitionsError: boolean = false;
    termDefinitionsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    @Output() getOpenAIOverview = new EventEmitter();

    constructor(private clipboard: Clipboard, private http: HttpClient) {}

    processTermDefinitions() {
        
        // Provide input to Cognative API
        this.http.post('/api/TermDefinitions', { rawInput: this.termDefinitions}).subscribe((data: IOverviewResponse) => {

            // Provide an output to be provided to the next step
            console.log(`POSTED Term Definitions: ${this.termDefinitions}`);
            console.log(`POSTED RESPONSE Overview: ${data.openAIResponse}`);

            // Populate patent claim term definitions field
            //this.getOpenAITermDefinitions.emit(data.openAIResponse);         
            this.getOpenAIOverview.emit(data.openAIResponse)
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

        //const pending = this.clipboard.beginCopy(this.termDefinitions[0]);
        const pending = this.clipboard.beginCopy('');
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