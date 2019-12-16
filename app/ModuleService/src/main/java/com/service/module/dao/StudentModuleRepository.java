package com.service.module.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.service.module.entity.StudentModule;
import com.service.module.entity.StudentModuleID;

@Repository
public interface StudentModuleRepository extends CrudRepository<StudentModule, StudentModuleID>{
	
	@Query("select s.student_id from StudentModule s where " + 
			"s.module_id=:module_id and " + 
			"s.section_id=(select ss.section_id from StudentModule ss where " + 
			"ss.module_id=:module_id and ss.student_id=:student_id)")
	Iterable<Integer> getClassList(@Param("module_id") String module_id, @Param("student_id") int student_id);
}
