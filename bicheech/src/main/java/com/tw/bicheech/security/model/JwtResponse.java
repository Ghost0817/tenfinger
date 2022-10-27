package com.tw.bicheech.security.model;

import java.io.Serializable;

public class JwtResponse implements Serializable {

	private final String jwt;
	private final String username;

	public JwtResponse(String jwt) {
		this.jwt = jwt;
		this.username = "";
	}

	public JwtResponse(String jwt,String username) {
		this.jwt = jwt;
		this.username = username;
	}

	public String getJwt() {
		return jwt;
	}

	public String getUsername() {
		return username;
	}
}