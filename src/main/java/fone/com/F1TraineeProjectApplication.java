package fone.com;

import fone.com.entities.Agent;
import fone.com.repos.AgentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Stream;

@SpringBootApplication
@RestController
public class F1TraineeProjectApplication implements CommandLineRunner {

  private final AgentRepo agentRepo;

  @Autowired
  public F1TraineeProjectApplication(AgentRepo agentRepo) {
    this.agentRepo = agentRepo;
  }

  public static void main(String[] args) {
    SpringApplication.run(F1TraineeProjectApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    Stream.of("Youness_HABACH", "Karim_BAGGARI", "Fatiha_KHAMLICHI", "Soufiane_ZEDDOU", "Zakaria_X", "Soumia_X", "X_X", "X_X").forEach(agentDetail -> {
      Agent agent = new Agent();
      agent.setFname(agentDetail.split("_")[0]);
      agent.setLname(agentDetail.split("_")[1]);
      agent.setBirthDate(LocalDate.now());
      agentRepo.save(agent);
    });
    System.out.println("Am i in");
  }


}
