package com.tw.bicheech.lesson.enity;

import javax.persistence.*;

@Entity
@Table(name = "category")
public class DAOCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "mn_title", nullable = false)
    private String mnTitle;

    @Column(name = "en_title", nullable = false)
    private String enTitle;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Column(name = "sortnum", nullable = false)
    private Integer sortnum;

    @Column(name = "is_premium", nullable = false)
    private Boolean isPremium = false;

    @Column(name = "category_type", length = 45)
    private String categoryType;

    @Column(name = "is_show")
    private Integer isShow;

    @Lob
    @Column(name = "mn_intro")
    private String mnIntro;

    @Lob
    @Column(name = "en_intro")
    private String enIntro;

    @Column(name = "IsShowKeys")
    private Integer isShowKeys;

    @Lob
    @Column(name = "mn_congrats")
    private String mnCongrats;

    @Lob
    @Column(name = "en_congrats")
    private String enCongrats;

    @Column(name = "key_layout", length = 45)
    private String keyLayout;

    @ManyToOne
    @JoinColumn(name = "category_parent", nullable = true)
    private DAOCategory categoryParent;

    public DAOCategory getCategoryParent() {
        return categoryParent;
    }

    public void setCategoryParent(DAOCategory categoryParent) {
        this.categoryParent = categoryParent;
    }

    public String getKeyLayout() {
        return keyLayout;
    }

    public void setKeyLayout(String keyLayout) {
        this.keyLayout = keyLayout;
    }

    public String getEnCongrats() {
        return enCongrats;
    }

    public void setEnCongrats(String enCongrats) {
        this.enCongrats = enCongrats;
    }

    public String getMnCongrats() {
        return mnCongrats;
    }

    public void setMnCongrats(String mnCongrats) {
        this.mnCongrats = mnCongrats;
    }

    public Integer getIsShowKeys() {
        return isShowKeys;
    }

    public void setIsShowKeys(Integer isShowKeys) {
        this.isShowKeys = isShowKeys;
    }

    public String getEnIntro() {
        return enIntro;
    }

    public void setEnIntro(String enIntro) {
        this.enIntro = enIntro;
    }

    public String getMnIntro() {
        return mnIntro;
    }

    public void setMnIntro(String mnIntro) {
        this.mnIntro = mnIntro;
    }

    public Integer getIsShow() {
        return isShow;
    }

    public void setIsShow(Integer isShow) {
        this.isShow = isShow;
    }

    public String getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(String categoryType) {
        this.categoryType = categoryType;
    }

    public Boolean getIsPremium() {
        return isPremium;
    }

    public void setIsPremium(Boolean isPremium) {
        this.isPremium = isPremium;
    }

    public Integer getSortnum() {
        return sortnum;
    }

    public void setSortnum(Integer sortnum) {
        this.sortnum = sortnum;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getEnTitle() {
        return enTitle;
    }

    public void setEnTitle(String enTitle) {
        this.enTitle = enTitle;
    }

    public String getMnTitle() {
        return mnTitle;
    }

    public void setMnTitle(String mnTitle) {
        this.mnTitle = mnTitle;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}