import { Component } from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
    selector: 'ab-terms',
    styleUrls: ['./terms.component.css'],
    templateUrl: './terms.component.html'
})
export class TermsComponent {
    pageTitle: string = "Terms";
    terms: string = '';
    termsError: boolean = false;
    termsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    constructor(private clipboard: Clipboard) {}

    processTerms() {

        // Validate Input

        // Provide input to Cognative API

        // Provide an output to be provided to the next step

        console.log(`Process Terms: ${this.terms}`);

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

        const pending = this.clipboard.beginCopy(this.terms);
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