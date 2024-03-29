import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { ITermsResponse } from "../models/termsResponse.model";
//import { ITerm } from "../models/term.model";

@Component({
    selector: 'ab-terms',
    styleUrls: ['./terms.component.css'],
    templateUrl: './terms.component.html'
})
export class TermsComponent implements OnInit {
    pageTitle: string = "Terms";
    @Input() terms: Array<string>;
    termsError: boolean = false;
    termsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    @Output() getOpenAITermDefinitions = new EventEmitter();

    constructor(private clipboard: Clipboard, private http: HttpClient) {}

    ngOnInit(): void {
        //Initialize draft object
        //this.terms = ['compliance violation instruction','temporary digital content object','permanent replacement digital content object','secondary digital content objects','deletion notification'];
    }

    processTerms() {

        // Validate Input

        // Provide input to Cognative API
        this.http.post('/api/Terms', { rawInput: this.terms}).subscribe((data: ITermsResponse) => {
            console.log(`POSTED Terms: ${this.terms}`);
            console.log(`POSTED Terms RESPONSE: ${JSON.stringify(data)}`);

            // Provide an output to be provided to the next step
            this.getOpenAITermDefinitions.emit(data);            
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
        // this.clipboard.copy(this.terms);

        const pending = this.clipboard.beginCopy(this.terms[0]);
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