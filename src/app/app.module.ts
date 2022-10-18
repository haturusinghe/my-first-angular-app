import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoringViewComponent } from './scoring-view/scoring-view.component';
import { InningSummaryComponent } from './scoring-view/inning-summary/inning-summary.component';
import { MatchDetailsComponent } from './scoring-view/match-details/match-details.component';
import { RunsPanelComponent } from './scoring-view/runs-panel/runs-panel.component';
import { ActionsPanelComponent } from './scoring-view/actions-panel/actions-panel.component';
import { BatterPanelComponent } from './scoring-view/batter-panel/batter-panel.component';
import { BowlerPanelComponent } from './scoring-view/bowler-panel/bowler-panel.component';

@NgModule({
  declarations: [AppComponent, EmployeesComponent, ProgressBarComponent, ScoringViewComponent, InningSummaryComponent, MatchDetailsComponent, RunsPanelComponent, ActionsPanelComponent, BatterPanelComponent, BowlerPanelComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
