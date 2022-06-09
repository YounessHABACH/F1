import { Component, OnInit } from '@angular/core';
import {Agent} from "../../models/agent";
import {AgentService} from "../../services/agent.service";

@Component({
  selector: 'app-agent-table',
  templateUrl: './agent-table.component.html',
  styleUrls: ['./agent-table.component.css']
})
export class AgentTableComponent implements OnInit {

  agents: Agent[];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.getAgents();
  }

  private getAgents() {
    this.agentService.getAgents().subscribe(data => {
      this.agents = data;
    })
  }

  onDelete(id: number) {
    const answer = confirm("Do u want to delete had Sat ???");
    if (answer) {
      const reAnswer = confirm("Wach are u sure ra ma kanla3bouch");
      if (reAnswer) {
        this.agentService.deleteById(id).subscribe(() => {
          this.getAgents();
        })
      }
    }
  }
}
