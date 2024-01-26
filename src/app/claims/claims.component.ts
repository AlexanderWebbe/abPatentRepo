import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { IClaimsResponse } from "../models/claimsResponse.model";

@Component({
    selector: 'ab-claims',
    styleUrls: ['./claims.component.css'],
    templateUrl: './claims.component.html',
})
export class ClaimsComponent {
    pageTitle: string = "Claims";
    @Input() claims: string;
    claimsError: boolean = false;
    claimsErrorMessage: string = 'Placeholder for general errors raised from the REST API';

    file: File | null = null; // Variable to store file
    fileName = '';
    uploadProgress:number;
    // uploadSub: Subscription;

    @Output() getOpenAITerms = new EventEmitter();

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

        // Provide input to Cognative API
        this.http.post('/api/Claims', { RawInput: this.claims}).subscribe((data: IClaimsResponse) => {
            console.log(`POSTED Claims: ${this.claims}`);
            console.log(`POSTED CLAIMS RESPONSE: ${JSON.stringify(data)}`);
            
            // Provide an output to be provided to the next step
            this.getOpenAITerms.emit(data);
        });

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
        console.log("Copy Draft to clipboard");

        // Copying large amounts of data can take time and requires async method
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
        console.log("TODO:  Refresh Draft");
        console.log('TODO:  Azure SQL Storage is required to flip between drafts');
    }

}