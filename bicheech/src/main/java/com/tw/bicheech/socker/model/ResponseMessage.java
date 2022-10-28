package com.tw.bicheech.socker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseMessage {
    private String content;
    private Date SentAt;
    private String roomId;

}
