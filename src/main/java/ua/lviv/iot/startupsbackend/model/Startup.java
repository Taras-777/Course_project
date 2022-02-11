package ua.lviv.iot.startupsbackend.model;

import lombok.*;
import ua.lviv.iot.startupsbackend.model.enums.StartupType;

import javax.persistence.*;
import java.sql.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Startup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Date dateOfFoundation;

    private String incubator;

    @Enumerated(EnumType.STRING)
    private StartupType type;

    private Integer entranceFee;
}
