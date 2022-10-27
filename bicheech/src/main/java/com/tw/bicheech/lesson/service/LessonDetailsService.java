package com.tw.bicheech.lesson.service;

import com.tw.bicheech.lesson.repository.CategoryDao;
import com.tw.bicheech.dao.ExerciseDao;
import com.tw.bicheech.dao.StatustypingDao;
import com.tw.bicheech.lesson.enity.DAOCategory;
import com.tw.bicheech.entity.DAOExercise;
import com.tw.bicheech.lesson.model.CategoryDTO;
import com.tw.bicheech.model.ExerciseDTO;
import com.tw.bicheech.model.ExerciseRequest;
import com.tw.bicheech.model.HallOfFameTop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class LessonDetailsService {

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private ExerciseDao exerciseDao;

    @Autowired
    private StatustypingDao statustypingDao;


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
                objHallOfFameTop.setUsername(item.get("username").toString());
                objHallOfFameTop.setTime(((Long) item.get("time")).intValue());
                objHallOfFameTop.setAcc((double) (item.get("acc")));
                objHallOfFameTop.setCorrecthit(((Long) item.get("correcthit")).intValue());

                objHallOfFameTop.setNetSpeed(Double.parseDouble(item.get("netSpeed").toString()));
                objHallOfFameTop.setMistakehit(((Long) item.get("mistakehit")).intValue());
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
