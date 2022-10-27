package com.tw.bicheech.lesson.model;

public class CategoryDTO {
    private Integer id;
    private String mnTitle;
    private String enTitle;
    private String slug;
    private Integer sortnum;
    private Boolean isPremium = false;
    private String categoryType;
    private Integer isShow;
    private String mnIntro;
    private String enIntro;
    private Integer isShowKeys;
    private String mnCongrats;
    private String enCongrats;
    private String keyLayout;
    private Integer categoryParent;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
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

    public String getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }

    public Integer getIsShow() {
        return isShow;
    }

    public void setIsShow(Integer isShow) {
        this.isShow = isShow;
    }

    public String getMnIntro() {
        return mnIntro;
    }

    public void setMnIntro(String mnIntro) {
        this.mnIntro = mnIntro;
    }

    public String getEnIntro() {
        return enIntro;
    }

    public void setEnIntro(String enIntro) {
        this.enIntro = enIntro;
    }

    public Integer getIsShowKeys() {
        return isShowKeys;
    }

    public void setIsShowKeys(Integer isShowKeys) {
        this.isShowKeys = isShowKeys;
    }

    public String getMnCongrats() {
        return mnCongrats;
    }

    public void setMnCongrats(String mnCongrats) {
        this.mnCongrats = mnCongrats;
    }

    public String getEnCongrats() {
        return enCongrats;
    }

    public void setEnCongrats(String enCongrats) {
        this.enCongrats = enCongrats;
    }

    public String getKeyLayout() {
        return keyLayout;
    }

    public void setKeyLayout(String keyLayout) {
        this.keyLayout = keyLayout;
    }

    public Integer getCategoryParent() {
        return categoryParent;
    }

    public void setCategoryParent(Integer categoryParent) {
        this.categoryParent = categoryParent;
    }
}
