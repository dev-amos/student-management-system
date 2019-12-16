package com.service.module.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.service.module.entity.Results;
import com.service.module.entity.ResultsID;

public interface ResultsRepository extends CrudRepository<Results, ResultsID>{

	@Query("SELECT r.module_id, r.result FROM Results r WHERE " + 
			"r.student_id = :student_id")
	Iterable<String[]> getResults(@Param("student_id") int student_id);
}
