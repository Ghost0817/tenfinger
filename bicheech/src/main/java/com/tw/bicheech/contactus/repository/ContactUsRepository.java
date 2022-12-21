package com.tw.bicheech.contactus.repository;

import com.tw.bicheech.contactus.entity.DAOContactUs;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsRepository extends CrudRepository<DAOContactUs, Integer> {
}
