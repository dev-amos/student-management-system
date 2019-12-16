package com.service.payment.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.service.payment.entity.PaymentRecords;
import com.service.payment.entity.PaymentRecordsID;

public interface PaymentRecordsRepository extends CrudRepository<PaymentRecords, PaymentRecordsID> {
	
	@Query("SELECT pr " + 
			"FROM PaymentRecords pr " + 
			"WHERE pr.studentId = :studentId")
	Iterable<PaymentRecords> findAllByStudentID(@Param("studentId") int studentId);
	
}
