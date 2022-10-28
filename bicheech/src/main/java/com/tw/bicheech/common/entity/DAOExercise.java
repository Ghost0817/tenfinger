package com.tw.bicheech.common.entity;


import com.tw.bicheech.lesson.enity.DAOCategory;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "exercise")
public class DAOExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Column(name = "mn_title", nullable = false)
    private String mnTitle;

    @Column(name = "en_title", nullable = false)
    private String enTitle;

    @Lob
    @Column(name = "mn_help_text")
    private String mnHelpText;

    @Lob
    @Column(name = "en_help_text")
    private String enHelpText;

    @Column(name = "tutor")
    private String tutor;

    @Column(name = "examtime", nullable = false)
    private Integer examtime;

    @Column(name = "sortnum", nullable = false)
    private Integer sortnum;

    @Column(name = "is_premium", nullable = false)
    private Boolean isPremium = false;

    @Column(name = "created")
    private Date created;

    @ManyToOne
    @JoinColumn(name = "lesson")
    private DAOCategory lesson;

    @ManyToOne
    @JoinColumn(name = "keyboard")
    private DAOKeyboard keyboard;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getMnTitle() {
        return mnTitle;
    }

    public void setMnTitle(String mnTitle) {
        this.mnTitle = mnTitle;
    }

    public String getEnTitle() {
        return enTitle;
    }

    public void setEnTitle(String enTitle) {
        this.enTitle = enTitle;
    }

    public String getMnHelpText() {
        return mnHelpText;
    }

    public void setMnHelpText(String mnHelpText) {
        this.mnHelpText = mnHelpText;
    }

    public String getEnHelpText() {
        return enHelpText;
    }

    public void setEnHelpText(String enHelpText) {
        this.enHelpText = enHelpText;
    }

    public String getTutor() {
        return tutor;
    }

    public void setTutor(String tutor) {
        this.tutor = tutor;
    }

    public Integer getExamtime() {
        return examtime;
    }

    public void setExamtime(Integer examtime) {
        this.examtime = examtime;
    }

    public Integer getSortnum() {
        return sortnum;
    }

    public void setSortnum(Integer sortnum) {
        this.sortnum = sortnum;
    }

    public Boolean getPremium() {
        return isPremium;
    }

    public void setPremium(Boolean premium) {
        isPremium = premium;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public DAOCategory getLesson() {
        return lesson;
    }

    public void setLesson(DAOCategory lesson) {
        this.lesson = lesson;
    }

    public DAOKeyboard getKeyboard() {
        return keyboard;
    }

    public void setKeyboard(DAOKeyboard keyboard) {
        this.keyboard = keyboard;
    }
}
