package com.service.payment.dao;

import org.springframework.data.repository.CrudRepository;

import com.service.payment.entity.Fees;

public interface FeesRepository extends CrudRepository<Fees, String> {

}
