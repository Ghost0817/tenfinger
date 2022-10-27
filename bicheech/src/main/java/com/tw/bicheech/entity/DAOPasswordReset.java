package com.tw.bicheech.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.Random;
import java.util.UUID;

import static com.tw.bicheech.unit.MdFive.getMd5;

@Entity
@Table(name = "password_reset")
public class DAOPasswordReset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private long user_id;

    @Column
    private String activation_key;

    @Column
    private Date created_at;

    @Column
    private boolean is_called;

    public DAOPasswordReset(long user_id, String activation_key, Date created_at, boolean is_called) {
        this.user_id = user_id;
        this.activation_key = activation_key;
        this.created_at = created_at;
        this.is_called = is_called;
    }

    public DAOPasswordReset() {

    }

    public boolean isIs_called() {
        return is_called;
    }

    public void setIs_called(boolean is_called) {
        this.is_called = is_called;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public String getActivation_key(Long userId, String UserMail) {
        String uniqueID = UUID.randomUUID().toString();
        Random random = new Random();
        int MrR = (int) (Math.random() * (999999 - 99999)) + 99999;
        long mstime = System.currentTimeMillis();
        long seconds = mstime / 1000;

        this.activation_key = getMd5(String.format(
                "%s_%d_%s_%d_%s_%d",
                uniqueID,
                random.nextInt(100000),
                userId,
                (mstime - (seconds * 1000)) / 1000,
                UserMail,
                MrR
        ));

        return activation_key;
    }

    public void setActivation_key(String activation_key) {
        this.activation_key = activation_key;
    }

    public long isUser_id() {
        return user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
