package com.tw.bicheech.model;

public class ExerciseDTO {

    private Integer id;
    private String slug;
    private String mnTitle;
    private String enTitle;
    private String mnHelpText;
    private String enHelpText;
    private String tutor;
    private Integer examtime;
    private Integer sortnum;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public Integer getSortnum() {
        return sortnum;
    }

    public void setSortnum(Integer sortnum) {
        this.sortnum = sortnum;
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
}
