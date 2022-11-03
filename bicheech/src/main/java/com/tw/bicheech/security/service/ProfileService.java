package com.tw.bicheech.security.service;

import com.tw.bicheech.common.entity.DAOExercise;
import com.tw.bicheech.common.model.ExerciseDTO;
import com.tw.bicheech.common.model.ExerciseRequest;
import com.tw.bicheech.common.model.HallOfFameTop;
import com.tw.bicheech.common.model.ResetPasswordDTO;
import com.tw.bicheech.common.repository.ExerciseDao;
import com.tw.bicheech.common.repository.PasswordResetRepository;
import com.tw.bicheech.common.entity.DAOPasswordReset;
import com.tw.bicheech.common.repository.StatustypingDao;
import com.tw.bicheech.lesson.enity.DAOCategory;
import com.tw.bicheech.lesson.model.CategoryDTO;
import com.tw.bicheech.lesson.repository.CategoryDao;
import com.tw.bicheech.security.entity.DAOUser;
import com.tw.bicheech.security.model.UserDTO;
import com.tw.bicheech.security.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ProfileService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    private PasswordResetRepository passwordResetDao;

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private ExerciseDao exerciseDao;

    @Autowired
    private StatustypingDao statustypingDao;


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
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setFirstname("");
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
    public List<CategoryDTO> getTutorLessonList() {


        List<DAOCategory> objCategories = categoryDao.getCustLessonForTutor();

        List<CategoryDTO> objCategoriesDTO = new ArrayList<>();

        for (DAOCategory objCategory: objCategories) {
            CategoryDTO objCategoryDTO = new CategoryDTO();
            objCategoryDTO.setId(objCategory.getId());
            objCategoryDTO.setMnTitle(objCategory.getMnTitle());
            objCategoryDTO.setEnTitle(objCategory.getEnTitle());
            objCategoryDTO.setSlug(objCategory.getSlug());
            objCategoryDTO.setSortnum(objCategory.getSortnum());
            objCategoryDTO.setCategoryType(objCategory.getCategoryType());
            objCategoryDTO.setPremium(objCategory.getIsPremium());
            objCategoryDTO.setIsShow(objCategory.getIsShow());
            objCategoryDTO.setMnIntro(objCategory.getMnIntro());
            objCategoryDTO.setEnIntro(objCategory.getEnIntro());
            objCategoryDTO.setMnCongrats(objCategory.getMnCongrats());
            objCategoryDTO.setEnCongrats(objCategory.getEnCongrats());
            if (!(objCategory.getCategoryParent() == null))
                objCategoryDTO.setCategoryParent(objCategory.getCategoryParent().getId());

            objCategoriesDTO.add(objCategoryDTO);
        }

        return objCategoriesDTO;
    }

    public Object getTestLessonList() {

        List<DAOCategory> objCategories = categoryDao.getCustLessonForTest();

        List<CategoryDTO> objCategoriesDTO = new ArrayList<>();

        for (DAOCategory objCategory: objCategories) {
            CategoryDTO objCategoryDTO = new CategoryDTO();
            objCategoryDTO.setId(objCategory.getId());
            objCategoryDTO.setMnTitle(objCategory.getMnTitle());
            objCategoryDTO.setEnTitle(objCategory.getEnTitle());
            objCategoryDTO.setSlug(objCategory.getSlug());
            objCategoryDTO.setSortnum(objCategory.getSortnum());
            objCategoryDTO.setCategoryType(objCategory.getCategoryType());
            objCategoryDTO.setPremium(objCategory.getIsPremium());
            objCategoryDTO.setIsShow(objCategory.getIsShow());
            objCategoryDTO.setMnIntro(objCategory.getMnIntro());
            objCategoryDTO.setEnIntro(objCategory.getEnIntro());
            objCategoryDTO.setMnCongrats(objCategory.getMnCongrats());
            objCategoryDTO.setEnCongrats(objCategory.getEnCongrats());
            if (!(objCategory.getCategoryParent() == null))
                objCategoryDTO.setCategoryParent(objCategory.getCategoryParent().getId());

            objCategoriesDTO.add(objCategoryDTO);
        }

        return objCategoriesDTO;
    }

    public Object getTutorExercise(ExerciseRequest exerciseRequest) {

        List<DAOExercise> objExercises = exerciseDao.getCustExerciseForTutor(exerciseRequest.getLang(),exerciseRequest.getCategory());

        List<ExerciseDTO> objExercisesDTO = new ArrayList<>();

        for (DAOExercise objCategory: objExercises) {
            ExerciseDTO objExerciseDTO = new ExerciseDTO();
            objExerciseDTO.setId(objCategory.getId());
            objExerciseDTO.setMnTitle(objCategory.getMnTitle());
            objExerciseDTO.setEnTitle(objCategory.getEnTitle());
            objExerciseDTO.setSlug(objCategory.getSlug());
            objExerciseDTO.setSortnum(objCategory.getSortnum());
            objExerciseDTO.setMnHelpText(objCategory.getMnHelpText());
            objExerciseDTO.setEnHelpText(objCategory.getEnHelpText());
            objExerciseDTO.setTutor(objCategory.getTutor());
            objExerciseDTO.setExamtime(objCategory.getExamtime());

            objExercisesDTO.add(objExerciseDTO);
        }
        return objExercisesDTO;
    }

    public Object getWallOfFame() {
        String categoryType = "LANG";
        String slug = "MONGOLIAN";

        DAOCategory objLang = categoryDao.getCustLangCate(slug, categoryType);
        // (1) fewer than 26 net WPM as very slow; Beginner
        // (2) 26 to 35 net WPM as slow; Elementary
        // (3) 35 to 45 net WPM as intermediate; Intermediate
        // (4) greater than 45 net WPM as fast. Advanced
        List<Map<String, Object>> objList = statustypingDao.findWallFame(objLang.getId());
        HallOfFameTop objHallOfFameTop = new HallOfFameTop();
        for (Map<String, Object> item: objList) {
            if (!item.isEmpty()) {
                objHallOfFameTop.setTopuser(item.get("username").toString());
                objHallOfFameTop.setTopprec((double) (item.get("acc")));

                objHallOfFameTop.setTopspeed(Double.parseDouble(item.get("netSpeed").toString()));
                //objHallOfFameTop.setTitle(item.get("title").toString());
            }
        }


        return objHallOfFameTop;
    }

    public Object getHallOfFameList() {
        String categoryType = "LANG";
        String slug = "MONGOLIAN";

        DAOCategory objLang = categoryDao.getCustLangCate(slug, categoryType);
        // (1) fewer than 26 net WPM as very slow; Beginner
        // (2) 26 to 35 net WPM as slow; Elementary
        // (3) 35 to 45 net WPM as intermediate; Intermediate
        // (4) greater than 45 net WPM as fast. Advanced
        statustypingDao.findHallOfFame(objLang.getId());

        return statustypingDao.findHallOfFame(objLang.getId());
    }
}
