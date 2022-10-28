package com.tw.bicheech.common.model;

public class HallOfFameTop {
    private String username;
    private Integer time;
    private Double acc;
    private Integer correcthit;
    private Double netSpeed;
    private Integer mistakehit;
    private String title = "";

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public Double getAcc() {
        return acc;
    }

    public void setAcc(Double acc) {
        this.acc = acc;
    }

    public Integer getCorrecthit() {
        return correcthit;
    }

    public void setCorrecthit(Integer correcthit) {
        this.correcthit = correcthit;
    }

    public Double getNetSpeed() {
        return netSpeed;
    }

    public void setNetSpeed(Double netSpeed) {
        this.netSpeed = netSpeed;
    }

    public Integer getMistakehit() {
        return mistakehit;
    }

    public void setMistakehit(Integer mistakehit) {
        this.mistakehit = mistakehit;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public HallOfFameTop(){}

    public HallOfFameTop(String username, Integer time, Double acc, Integer correcthit, Double netSpeed, Integer mistakehit) {
        this.username = username;
        this.time = time;
        this.acc = acc;
        this.correcthit = correcthit;
        this.netSpeed = netSpeed;
        this.mistakehit = mistakehit;
    }

    public HallOfFameTop(String username, Integer time, Double acc, Integer correcthit, Double netSpeed, Integer mistakehit, String title) {
        this.username = username;
        this.time = time;
        this.acc = acc;
        this.correcthit = correcthit;
        this.netSpeed = netSpeed;
        this.mistakehit = mistakehit;
        this.title = title;
    }
}
