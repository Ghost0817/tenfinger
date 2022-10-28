package com.tw.bicheech.socker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomsModels {
    private String roomId;
    private String hostUserId;
    private Boolean isStarted;
    private Boolean isFinished;
    private Boolean isExistsed;
    private Date createdAt;
    private Date finishedAt;
    private List<RoomForUser> objRoomForUser;
}
