package com.sai.bicheech.service;

import java.sql.Date;
import java.util.ArrayList;

import com.sai.bicheech.dao.PasswordResetDao;
import com.sai.bicheech.entity.DAOPasswordReset;
import com.sai.bicheech.model.ResetPasswordDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sai.bicheech.dao.UserDao;
import com.sai.bicheech.entity.DAOUser;
import com.sai.bicheech.model.UserDTO;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordResetDao passwordResetDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	public boolean isUsernameExists(String username) {
		DAOUser user = userDao.findByUsername(username);
		boolean result = false;
		if (user != null) {
			result = true;
		}
		return result;
	}

	public DAOUser studentByEmailExists(String email) {
		DAOUser user = userDao.findByEmail(email);
		return user;
	}
	
	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		//newUser.setFirstname("");
		newUser.setFullName("");
		newUser.setGender("N");
		newUser.setIsActive(true);
		newUser.setActivationKey("");
		newUser.setCreated(new Date(System.currentTimeMillis()));
		newUser.setUpdated(new Date(System.currentTimeMillis()));
		newUser.setLanguage("mn");
		newUser.setOrganization(" ");
		newUser.setState("");
		newUser.setCity("");
		newUser.setOrgType("");
		newUser.setLastname("");

		return userDao.save(newUser);
	}

    public void createResetLink(ResetPasswordDTO resetPassword, long userId, String userMail) {
		DAOPasswordReset objPasswordReset = new DAOPasswordReset();
		System.out.println(objPasswordReset.getActivation_key(userId, userMail));
		objPasswordReset.setActivation_key(objPasswordReset.getActivation_key(userId, userMail));
		objPasswordReset.setIs_called(false);
		objPasswordReset.setUser_id(userId);
		objPasswordReset.setCreated_at(new Date(System.currentTimeMillis()));
		passwordResetDao.save(objPasswordReset);
    }
}