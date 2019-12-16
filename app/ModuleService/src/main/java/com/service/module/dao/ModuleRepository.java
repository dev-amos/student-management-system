package com.service.module.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.service.module.entity.Module;

public interface ModuleRepository extends CrudRepository<Module, String>{

	@Query("select m.module_id, m.module_name, s.section_id from " + 
			"Module m inner join StudentModule s on " + 
			"m.module_id = s.module_id " + 
			"where s.student_id = :student_id")
	Iterable<String[]> getModules(@Param("student_id") int student_id);
	
}
