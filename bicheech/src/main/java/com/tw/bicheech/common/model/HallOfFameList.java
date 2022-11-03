package com.tw.bicheech.common.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HallOfFameList {
    private String username;
    private Integer time;
    private Double acc;
    private Integer correcthit;
    private Double netSpeed;
    private Integer mistakehit;
    private String title = "";
}
