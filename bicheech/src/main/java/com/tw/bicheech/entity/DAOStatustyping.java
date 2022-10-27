package com.tw.bicheech.entity;

import com.tw.bicheech.security.entity.DAOUser;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Statustyping")
public class DAOStatustyping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "time", nullable = false)
    private Integer time;

    @Column(name = "acc", nullable = false, precision = 10, scale = 0)
    private Double acc;

    @Column(name = "problemkey", length = 65535, nullable = true)
    private String problemkey;

    @Column(name = "correcthit", nullable = false)
    private Integer correcthit;

    @Column(name = "mistakehit", nullable = false)
    private Integer mistakehit;

    @Column(name = "error_keys", nullable = true, length = 65535)
    private String error_keys;

    @Column(name = "all_keys", nullable = false, length = 65535)
    private String all_keys;

    @Column(name = "lastLogin", nullable = false)
    private Date lastLogin;

    @Column(name = "createdAt", nullable = false)
    private Date createdAt;

    @Column(name = "modifierAt", nullable = false)
    private Date modifierAt;

    @Column(name = "sess_id", nullable = true, length = 128)
    private String sess_id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private DAOUser student;

    @ManyToOne
    @JoinColumn(name = "keyboard")
    private DAOKeyboard keyboard;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private DAOExercise exercise;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getProblemkey() {
        return problemkey;
    }

    public void setProblemkey(String problemkey) {
        this.problemkey = problemkey;
    }

    public Integer getCorrecthit() {
        return correcthit;
    }

    public void setCorrecthit(Integer correcthit) {
        this.correcthit = correcthit;
    }

    public Integer getMistakehit() {
        return mistakehit;
    }

    public void setMistakehit(Integer mistakehit) {
        this.mistakehit = mistakehit;
    }

    public String getError_keys() {
        return error_keys;
    }

    public void setError_keys(String error_keys) {
        this.error_keys = error_keys;
    }

    public String getAll_keys() {
        return all_keys;
    }

    public void setAll_keys(String all_keys) {
        this.all_keys = all_keys;
    }

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getModifierAt() {
        return modifierAt;
    }

    public void setModifierAt(Date modifierAt) {
        this.modifierAt = modifierAt;
    }

    public String getSess_id() {
        return sess_id;
    }

    public void setSess_id(String sess_id) {
        this.sess_id = sess_id;
    }

    public DAOUser getStudent() {
        return student;
    }

    public void setStudent(DAOUser student) {
        this.student = student;
    }

    public DAOKeyboard getKeyboard() {
        return keyboard;
    }

    public void setKeyboard(DAOKeyboard keyboard) {
        this.keyboard = keyboard;
    }

    public DAOExercise getExercise() {
        return exercise;
    }

    public void setExercise(DAOExercise exercise) {
        this.exercise = exercise;
    }
}
