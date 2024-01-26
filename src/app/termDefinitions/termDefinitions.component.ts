import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
export class TermDefinitionsComponent implements OnInit {
    pageTitle: string = "Term Definitions";
    @Input() termDefinitions: TermDefinitionResponse[];
    termDefinitionsError: boolean = false;
    termDefinitionsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    @Output() getOpenAIOverview = new EventEmitter();

    constructor(private clipboard: Clipboard, private http: HttpClient) {}

    ngOnInit(): void {
        //Initialize draft object
        this.termDefinitions = [
            { Term: 'associate', Definition: 'The term "associate" refers to the act of connecting or linking two or more items or entities together, often based on a specific relationship or criteria.' },
            { Term: 'author', Definition: 'In the context of software engineering, an "author" refers to the individual or entity responsible for creating or developing a piece of software code or program.' },
            { Term: 'automatic', Definition: '"Automatic" describes a process or action that is performed without human intervention, typically through the use of automation or algorithms.' },
            { Term: 'channels', Definition: '"Channels" in software engineering refer to the means or pathways through which data or information is transmitted or communicated between different components or systems.' },
            { Term: 'compliance non-violation instruction', Definition: 'A "compliance non-violation instruction" is a directive or set of guidelines aimed at ensuring that certain rules or regulations are followed and that no violations occur within a software system or application.' }
        ];
    }

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