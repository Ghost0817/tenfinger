package com.tw.bicheech.contactus.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@Entity
@Table(name = "contactus")
@Data
public class DAOContactUs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = "Name is mandatory")
    @Column
    private String name;

    @NotBlank(message = "Email is mandatory")
    @Column
    private String email;

    @NotBlank(message = "Content is mandatory")
    @Column
    private String Content;
}
