package com.tw.bicheech.security.controller;

import com.tw.bicheech.common.model.Errors;
import com.tw.bicheech.common.model.ResultData;
import com.tw.bicheech.config.JwtTokenUtil;
import com.tw.bicheech.security.model.JwtRequest;
import com.tw.bicheech.security.model.JwtResponse;
import com.tw.bicheech.security.model.UserDTO;
import com.tw.bicheech.security.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.tw.bicheech.security.service.JwtUserDetailsService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/", maxAge = 3600)
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@Autowired
	private ProfileService profileService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername()));
	}

	@RequestMapping(value = "/register-teacher", method = RequestMethod.POST)
	public ResponseEntity<?> saveTeacher(@Valid @RequestBody final UserDTO user, final BindingResult result, final Model model) throws Exception {
		ResultData objResultData = new ResultData();
		List<Errors> listErrors = new ArrayList<>();
		Errors objErros;

		if (user.getUsername().isEmpty()) {
			objErros = new Errors();
			objErros.setField("username");
			objErros.setMessage("Username is required");
			listErrors.add(objErros);
		}
		if (!user.getUsername().isEmpty() && (user.getUsername().length() <= 3 || user.getUsername().length()>40)) {
			objErros = new Errors();
			objErros.setField("username");
			objErros.setMessage("Username must be greater than 3 characters and less than 40 characters");
			listErrors.add(objErros);
		}
		if (!user.getUsername().isEmpty() && profileService.isUsernameExists(user.getUsername())) {
			objErros = new Errors();
			objErros.setField("username");
			objErros.setMessage("This username already exists. Please try a different username.");
			listErrors.add(objErros);
		}
		if (!user.getEmail().isEmpty() && !profileService.studentByEmailExists(user.getEmail()).equals(null)) {
			objErros = new Errors();
			objErros.setField("email");
			objErros.setMessage("An account with this email already exists. If you lost your password, you should use the \"I forgot my login\" feature to recover it.");
			listErrors.add(objErros);
		}
		if (user.getEmail().isEmpty()) {
			objErros = new Errors();
			objErros.setField("email");
			objErros.setMessage("Email is required");
			listErrors.add(objErros);
		}
		String regexPattern = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
				+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
		if (!user.getEmail().isEmpty() && !user.getEmail().matches(regexPattern)) {
			objErros = new Errors();
			objErros.setField("email");
			objErros.setMessage("Email address is invalid");
			listErrors.add(objErros);
		}
		if (user.getPassword().isEmpty()) {
			objErros = new Errors();
			objErros.setField("password");
			objErros.setMessage("Password is required");
			listErrors.add(objErros);
		}
		if (user.getRe_password().isEmpty()) {
			objErros = new Errors();
			objErros.setField("re_password");
			objErros.setMessage("Re_password is required");
			listErrors.add(objErros);
		}
		if (!user.getPassword().isEmpty() && (user.getPassword().length() <= 8 && user.getPassword().length()>120)) {
			objErros = new Errors();
			objErros.setField("password");
			objErros.setMessage("Password must be greater than 8 characters and less than 120 characters");
			listErrors.add(objErros);
		}
		if (!user.getRe_password().isEmpty() && (user.getRe_password().length() <= 8 || user.getRe_password().length()>120)) {
			objErros = new Errors();
			objErros.setField("re_password");
			objErros.setMessage("Re_password must be greater than 8 characters and less than 120 characters");
			listErrors.add(objErros);
		}
		if (!user.getRe_password().isEmpty() && !user.getPassword().isEmpty() && !user.getRe_password().equals(user.getPassword())) {
			objErros = new Errors();
			objErros.setField("re_password");
			objErros.setMessage("Both password fields must match");
			listErrors.add(objErros);
		}

		objResultData.setErrors(listErrors);
		objResultData.setValid(listErrors.isEmpty());

		if(listErrors.isEmpty()) {
			profileService.save(user);
		}

		return ResponseEntity.ok(objResultData);
	}
}