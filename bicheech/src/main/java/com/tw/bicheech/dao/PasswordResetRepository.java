package com.tw.bicheech.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tw.bicheech.entity.DAOPasswordReset;

@Repository
public interface PasswordResetRepository extends CrudRepository<DAOPasswordReset, Integer> {

}
