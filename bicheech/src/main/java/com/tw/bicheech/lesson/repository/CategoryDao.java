package com.tw.bicheech.lesson.repository;

import com.tw.bicheech.lesson.enity.DAOCategory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryDao extends CrudRepository<DAOCategory, Integer> {

    @Query("select u from DAOCategory u where u.id not in (13,14,19,20) and u.categoryParent.id not in (13,14,19,20) ORDER BY u.sortnum ASC ")
    List<DAOCategory> getCustLessonForTutor();

    @Query("select u from DAOCategory u where u.id in (13,14,19,20) or u.categoryParent.id in (13,14,19,20) ORDER BY u.sortnum ASC")
    List<DAOCategory> getCustLessonForTest();

    @Query("select u from DAOCategory u where u.slug=?1 and u.categoryType=?2")
    DAOCategory getCustLangCate(String slug, String cateType);

}
