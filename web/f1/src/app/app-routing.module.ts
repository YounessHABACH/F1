import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {AgentDetailComponent} from "./features/agent-detail/agent-detail.component";
import {AgentTableComponent} from "./features/agent-table/agent-table.component";

const routes: Routes = [
  { path: '', component: AgentTableComponent },
  { path: 'detail/:agentId', component: AgentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
