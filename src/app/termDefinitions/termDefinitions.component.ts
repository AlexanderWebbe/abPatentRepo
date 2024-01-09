import { Component } from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';

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

    constructor(private clipboard: Clipboard) {}

    processTermDefinitions() {

        // Validate Input

        // Provide input to Cognative API

        // Provide an output to be provided to the next step
        console.log(`Process Term Definitions: ${this.termDefinitions}`);

    }

    previousDraftOnClick() {
        console.log('Previous Draft');
    }

    nextDraftOnClick() {
        console.log("Next Draft");
    }

    copyDraftOnClick() {
        console.log("Copy Draft");
        // this.clipboard.copy(this.claims);

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
        console.log("Refresh Draft");
    }

}