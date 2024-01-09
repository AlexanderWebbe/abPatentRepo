import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'ab-actions',
    styleUrls: ['./actions.component.css'],
    templateUrl: './actions.component.html',
})
export class ActionsComponent {
    @Output() previousDraft = new EventEmitter();
    @Output() nextDraft = new EventEmitter();
    @Output() copyDraft = new EventEmitter();
    @Output() refreshDraft = new EventEmitter();

    previousDraftOnClick() {
        this.previousDraft.emit();
    }

    nextDraftOnClick() {
        this.nextDraft.emit();
    }

    copyOnClick() {
        this.copyDraft.emit();
    }

    refreshOnClick() {
        this.refreshDraft.emit();
    }

}