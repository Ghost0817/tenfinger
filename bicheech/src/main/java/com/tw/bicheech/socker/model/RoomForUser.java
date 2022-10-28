package com.tw.bicheech.socker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomForUser {
    private String userId;
    private String userName;
    private Boolean isFinished;
    private Boolean isExistsed;
    private Double Score;
    private Double wpm;
    private String status;
    private Date createdAt;
    private Date finishedAt;
}
