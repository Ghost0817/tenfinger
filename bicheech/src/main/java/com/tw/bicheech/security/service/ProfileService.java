package com.tw.bicheech.security.service;

import com.tw.bicheech.common.model.ResetPasswordDTO;
import com.tw.bicheech.common.repository.PasswordResetRepository;
import com.tw.bicheech.common.entity.DAOPasswordReset;
import com.tw.bicheech.security.entity.DAOUser;
import com.tw.bicheech.security.model.UserDTO;
import com.tw.bicheech.security.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;

@Service
public class ProfileService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordResetRepository passwordResetDao;


    public boolean isUsernameExists(String username) {
        DAOUser user = userDao.findByUsername(username);
        boolean result = user != null;
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
        //newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
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
