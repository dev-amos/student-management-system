package com.service.student.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.service.student.entity.Student;

public interface StudentRepository extends CrudRepository<Student, Integer> {
	
	@Query("SELECT s " + 
			"FROM Student s " + 
			"WHERE s.email = :email")
	Iterable<Student> findByEmail(@Param("email") String email);
	
}
