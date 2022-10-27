package com.tw.bicheech.dao;

import com.tw.bicheech.entity.DAOExercise;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseDao extends CrudRepository<DAOExercise, Integer> {

    @Query("select e from DAOExercise e " +
            "inner join DAOCategory c ON c.id = e.lesson.id " +
            "inner join DAOCategory c1 ON c1.id = c.categoryParent.id " +
            "inner join DAOCategory c2 ON c2.id = c1.categoryParent.id " +
            "where c2.slug =?1 AND c.slug =?2 order by e.sortnum asc ")
    List<DAOExercise> getCustExerciseForTutor(String lang, String lesson);
}
