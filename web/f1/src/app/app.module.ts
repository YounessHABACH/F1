import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentTableComponent } from './features/agent-table/agent-table.component';
import { AgentFormComponent } from './features/agent-form/agent-form.component';
import { AgentDetailComponent } from './features/agent-detail/agent-detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AgentTableComponent,
    AgentFormComponent,
    AgentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
