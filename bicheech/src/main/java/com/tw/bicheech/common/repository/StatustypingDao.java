package com.tw.bicheech.common.repository;

import com.tw.bicheech.common.entity.DAOStatustyping;
import com.tw.bicheech.common.model.HallOfFameTop;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface StatustypingDao  extends CrudRepository<DAOStatustyping, Integer> {

    @Query("SELECT s.username as username," +
            "            SUM(a.time) as time, AVG(a.acc) as acc," +
            "            SUM(a.correcthit) as correcthit," +
            "            ( ( SUM(a.correcthit) - ( SUM(a.mistakehit) * 5 ) ) / 5 ) / ( SUM(a.time) / 60 ) as netSpeed," +
            "            SUM(a.mistakehit) as mistakehit" +
            "            FROM DAOStatustyping a" +
            "            inner join DAOExercise e ON a.exercise.id = e.id" +
            "            inner join DAOCategory l ON e.lesson.id = l.id and l.categoryType = 'LESSON'" +
            "            inner join DAOCategory c ON l.categoryParent.id = c.id and c.categoryType = 'CATEGORY'" +
            "            inner join DAOUser s ON a.student.id = s.id and c.categoryType = 'CATEGORY'" +
            "            where c.categoryParent.id = ?1 and c.id not in (13,14) " +
            "            group by s.id " )
    List<Map<String, Object>> findWallFame(Integer lang);

    @Query("SELECT s.username," +
            "            SUM(a.time) as time, AVG(a.acc) as acc," +
            "            SUM(a.correcthit) as correcthit," +
            "            ( ( SUM(a.correcthit) - ( SUM(a.mistakehit) * 5 ) ) / 5 ) / ( SUM(a.time) / 60 ) as netSpeed," +
            "            SUM(a.mistakehit) as mistakehit" +
            "            FROM DAOStatustyping as a" +
            "            inner join DAOExercise as e ON a.exercise.id = e.id" +
            "            inner join DAOCategory as l ON e.lesson.id = l.id and l.categoryType = 'LESSON'" +
            "            inner join DAOCategory as c ON l.categoryParent.id = c.id and c.categoryType = 'CATEGORY'" +
            "            inner join DAOUser as s ON a.student.id = s.id and c.categoryType = 'CATEGORY'" +
            "            where c.categoryParent.id = ?1 and c.id not in (13,14)" +
            "            group by s.id")
    List<HallOfFameTop> findHallOfFame(Integer lang);

    @Query("SELECT " +
            "            SUM(a.time) as time, AVG(a.acc) as acc," +
            "            SUM(a.correcthit) as correcthit," +
            "            SUM(a.mistakehit) as mistakehit" +
            "            FROM DAOStatustyping a" +
            "            inner join DAOExercise e ON a.exercise.id = e.id" +
            "            inner join DAOCategory l ON e.lesson.id = l.id and l.categoryType = 'LESSON'" +
            "            inner join DAOCategory c ON l.categoryParent.id = c.id and c.categoryType = 'CATEGORY'" +
            "            where a.student.id = ?1 and c.categoryParent.id = ?2 and c.id not in (13,14)")
    List<HallOfFameTop> findSkillLevel(Integer id, Integer lang);

}
