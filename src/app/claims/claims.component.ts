import { Component } from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

@Component({
    selector: 'ab-claims',
    styleUrls: ['./claims.component.css'],
    templateUrl: './claims.component.html',
})
export class ClaimsComponent {
    pageTitle: string = "Claims";
    claims: string = '';
    claimsError: boolean = false;
    claimsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    file: File | null = null; // Variable to store file
    fileName = '';
    uploadProgress:number;
    // uploadSub: Subscription;

    constructor(private clipboard: Clipboard, private http: HttpClient) {}

     onFileSelected(event) {
        const file:File = event.target.files[0];
      
        if (file) {
            this.file = file;
          }
    } 

    onUpload() {
        if (this.file) {
            const formData = new FormData();
        
            formData.append('file', this.file, this.file.name);
        
            const upload$ = this.http.post("https://httpbin.org/post", formData);
        
            //this.status = 'uploading';
        
            upload$.subscribe({
              next: () => {
                //this.status = 'success';
              },
              error: (error: any) => {
                //this.status = 'fail';
                return throwError(() => error);
              },
            });
          }
    }

    processClaims() {

        // Validate Input

        // Provide input to Cognative API

        // Provide an output to be provided to the next step

        console.log(`Process Claims: ${this.claims}`);
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

        const pending = this.clipboard.beginCopy(this.claims);
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