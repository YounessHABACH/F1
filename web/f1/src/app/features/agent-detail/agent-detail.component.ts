import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Agent} from "../../models/agent";
import {AgentService} from "../../services/agent.service";

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit {

  agentId: number;
  currentAgent: Agent;

  constructor(private activatedRoute: ActivatedRoute,
              private agentService: AgentService) { }

  ngOnInit(): void {
    this.agentId = this.activatedRoute.snapshot.params['agentId'];
    console.log(this.agentId)
    this.getAgentById()
  }

  private getAgentById() {
    this.agentService.getAgentById(this.agentId).subscribe(data => {
      this.currentAgent = data;
    })
  }
}
