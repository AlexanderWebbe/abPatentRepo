import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import {ClipboardModule} from '@angular/cdk/clipboard';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from "@angular/material/stepper";
import { MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ActionsComponent } from "./actions/actions.component";
import { ClaimsComponent } from "./claims/claims.component";
import { HistoryListComponent } from "./history/history-list.component";
import { TermsComponent } from "./terms/terms.component";
import { TermDefinitionsComponent } from "./termDefinitions/termDefinitions.component";
import { OverviewComponent } from './overview/overview.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [AppComponent, ActionsComponent, HistoryListComponent, ClaimsComponent, TermsComponent, TermDefinitionsComponent, OverviewComponent, SummaryComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ClipboardModule, FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatTooltipModule ],  
  bootstrap: [AppComponent]
})
export class AppModule {}
