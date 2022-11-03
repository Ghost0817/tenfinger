package com.tw.bicheech.common.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HallOfFameTop {
    private String topuser;
    private Double topspeed;
    private Double topprec;
}
