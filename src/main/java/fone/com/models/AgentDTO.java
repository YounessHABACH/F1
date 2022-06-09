package fone.com.models;

import lombok.Data;

import java.time.LocalDate;

@Data
public class AgentDTO {
  private Long id;
  private String fname;
  private String lname;
  private LocalDate birthDate;
}
