package com.tw.bicheech.security.controller;

import com.tw.bicheech.common.model.Errors;
import com.tw.bicheech.common.model.ExerciseRequest;
import com.tw.bicheech.common.model.ResetPasswordDTO;
import com.tw.bicheech.common.model.ResultData;
import com.tw.bicheech.security.entity.DAOUser;
import com.tw.bicheech.security.model.JwtRequest;
import com.tw.bicheech.security.model.UserDTO;
import com.tw.bicheech.security.repository.UserDao;
import com.tw.bicheech.security.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ProfileContrller {

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProfileService profileService;

    @RequestMapping(value = "/account", method = RequestMethod.GET)
    public ResponseEntity<?> accountInfo(Principal principal) throws Exception {
        UserDTO objUserDTO = new UserDTO();
        DAOUser user = userDao.findByUsername(principal.getName());
        objUserDTO.setUsername(user.getUsername());
        objUserDTO.setPassword("");
        objUserDTO.setRe_password("");
        objUserDTO.setGender(user.getGender());
        objUserDTO.setFullName(user.getFullName());
        objUserDTO.setFirstname(user.getFirstname());
        objUserDTO.setLastname(user.getLastname());
        objUserDTO.setActivationKey("");
        objUserDTO.setIs_active(user.getIsActive());
        objUserDTO.setLast_activity_at(user.getLastActivityAt());
        objUserDTO.setLast_action(user.getLastAction());
        objUserDTO.setCountry(user.getCountry());
        objUserDTO.setOrganization(user.getOrganization());
        objUserDTO.setLanguage(user.getLanguage());
        objUserDTO.setState(user.getState());
        objUserDTO.setCity(user.getCity());
        return ResponseEntity.ok(objUserDTO);
    }

    @RequestMapping(value = "/changeinfo", method = RequestMethod.POST)
    public ResponseEntity<?> changeInfo(@Valid @RequestBody final UserDTO user, Principal principal) throws Exception {
        return ResponseEntity.ok("");
    }

    @RequestMapping(value = "/register-student", method = RequestMethod.POST)
    public ResponseEntity<?> saveStudent(@RequestBody final UserDTO user) throws Exception {
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
        if (!user.getEmail().isEmpty() && profileService.studentByEmailExists(user.getEmail()) != null) {
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

    @RequestMapping(value = "/forgot", method = RequestMethod.POST)
    public ResponseEntity<?> resetPassword(@RequestBody final ResetPasswordDTO resetPassword) throws Exception {
        ResultData objResultData = new ResultData();
        List<Errors> listErrors = new ArrayList<>();
        Errors objErros;

        if (resetPassword.getEmail().isEmpty()) {
            objErros = new Errors();
            objErros.setField("email");
            objErros.setMessage("Email is required");
            listErrors.add(objErros);
        }
        DAOUser objUser = profileService.studentByEmailExists(resetPassword.getEmail());

        if (!resetPassword.getEmail().isEmpty() && objUser.equals(null)) {
            objErros = new Errors();
            objErros.setField("email");
            objErros.setMessage("Can't find that email, sorry.");
            listErrors.add(objErros);
        }
        objResultData.setErrors(listErrors);
        objResultData.setValid(listErrors.isEmpty());

        if(listErrors.isEmpty()) {

            profileService.createResetLink(resetPassword, objUser.getId(), resetPassword.getEmail());
        }

        return ResponseEntity.ok(objResultData);
    }

    @RequestMapping(value = "/reset-password", method = RequestMethod.POST)
    public ResponseEntity<?> resetPassword() {

        //lessonDetailsService.getTutorLessonList();

        return ResponseEntity.ok(null);
    }

    @RequestMapping(value = "/lesson", method = RequestMethod.GET)
    public ResponseEntity<?> lesson() {

        return ResponseEntity.ok(profileService.getTutorLessonList());
    }

    @RequestMapping(value = "/exercise", method = RequestMethod.POST)
    public ResponseEntity<?> execrise(@RequestBody final ExerciseRequest exerciseRequest) {

        return ResponseEntity.ok(profileService.getTutorExercise(exerciseRequest));
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public ResponseEntity<?> test() {

        return ResponseEntity.ok(profileService.getTestLessonList());
    }

    @RequestMapping(value = "/hall-of-fame-list", method = RequestMethod.GET)
    public ResponseEntity<?> hallOfFameList() {

        return ResponseEntity.ok(profileService.getHallOfFameList());
    }

    @RequestMapping(value = "/wall-of-fame", method = RequestMethod.GET)
    public ResponseEntity<?> wallOfFame() {

        return ResponseEntity.ok(profileService.getWallOfFame());
    }
}
