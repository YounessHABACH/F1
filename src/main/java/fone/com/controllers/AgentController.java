package fone.com.controllers;

import fone.com.entities.Agent;
import fone.com.models.AgentDTO;
import fone.com.repos.AgentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("agents")
@CrossOrigin("*")
public class AgentController {

  private final AgentRepo agentRepository;

  @Autowired
  public AgentController(AgentRepo agentRepository){
    this.agentRepository = agentRepository;
  }

  @GetMapping("/all")
  public List<Agent> getAllAgents(){
    return this.agentRepository.findAll();
  }

  @GetMapping("/get")
  public Agent getAgentById(@RequestParam("id") Long id){
    return this.agentRepository.findById(id).get();
  }

  @PostMapping("/add")
  public void addAgent(@RequestBody AgentDTO agent){
    System.out.println(agent);
    Agent agent1 = new Agent();
    agent1.setFname(agent.getFname());
    agent1.setLname(agent.getLname());
    agent1.setBirthDate(agent.getBirthDate());
    agentRepository.save(agent1);
  }

  @DeleteMapping("/delete")
  public void deleteAgent(@RequestParam("id") Long id){
    this.agentRepository.deleteById(id);
  }
}
