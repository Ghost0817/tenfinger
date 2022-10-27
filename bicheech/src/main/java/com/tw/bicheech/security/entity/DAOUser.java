package com.tw.bicheech.security.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Date;

@Entity
@Table(name = "user")
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank(message = "Username is mandatory")
	@Column
	private String username;

	@NotBlank(message = "Email is mandatory")
	@Column
	private String email;

	@Column
	@JsonIgnore
	@NotBlank(message = "Password is mandatory")
	private String password;

	@Column
	private String gender;

	@Column
	private String fullName;

	@Column
	private String roles;

	@NotBlank(message = "Firstname is mandatory")
	@Column
	private String firstname;

	@NotBlank(message = "lastname is mandatory")
	@Column
	private String lastname;

	@Column
	private String activationKey;

	@Column
	private Boolean is_active;

	@Column
	private Date last_activity_at;

	@Column
	private String last_action;

	@Column
	private Date last_login;

	@Column
	private Date created;

	@Column
	private Date updated;

	@Column
	private String country;

	@Column
	private String organization;

	@Column
	private String orgType;

	@Column
	private String language;

	@Column
	private String state;

	@Column
	private String city;


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getActivationKey() { return activationKey; }

	public void setActivationKey(String activationKey) {
		this.activationKey = activationKey;
	}

	public Boolean getIsActive() {
		return is_active;
	}

	public void setIsActive(Boolean is_active) {
		this.is_active = is_active;
	}

	public Date getLastActivityAt() {
		return last_activity_at;
	}

	public void setLastActivityAt(Date last_activity_at) {
		this.last_activity_at = last_activity_at;
	}

	public String getLastAction() { return last_action; }

	public void setLastAction(String last_action) {
		this.last_action = last_action;
	}

	public Date getLastLogin() {
		return last_login;
	}

	public void setLastLogin(Date last_login) {
		this.last_login = last_login;
	}

	public Date getCreated() { return created; }

	public void setCreated(Date created) { this.created = created; }

	public Date getUpdated() {
		return updated;
	}

	public void setUpdated(Date updated) {
		this.updated = updated;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.state = city;
	}

	public String getOrgType() {
		return orgType;
	}

	public void setOrgType(String orgType) {
		this.orgType = orgType;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
}