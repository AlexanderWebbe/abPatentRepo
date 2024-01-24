import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { IDraft } from '../models/draft.model';

@Component({
  selector: 'ab-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() draft: IDraft;

  constructor() { }

  ngOnInit(): void {
  }

}
