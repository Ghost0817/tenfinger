package com.tw.bicheech.common.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tw.bicheech.common.entity.DAOPasswordReset;

@Repository
public interface PasswordResetRepository extends CrudRepository<DAOPasswordReset, Integer> {

}
