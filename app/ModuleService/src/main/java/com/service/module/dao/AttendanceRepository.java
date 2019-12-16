package com.service.module.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.service.module.entity.Attendance;
import com.service.module.entity.AttendanceID;

public interface AttendanceRepository extends CrudRepository<Attendance, AttendanceID>{

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query("UPDATE Attendance a SET a.present=1 WHERE " + 
			"a.module_id = :module_id and " + 
			"a.week_id = :week_id and " + 
			"a.student_id = :student_id")
	int updateAttendance(@Param("module_id") String module_id, 
					@Param("week_id") int week_id, 
					@Param("student_id") int student_id);
	

	@Query("SELECT a FROM Attendance a where " +
			"a.module_id = :module_id and " + 
			"a.student_id = :student_id")
	Iterable<Attendance> getAttendance(@Param("module_id") String module_id, 
			@Param("student_id") int student_id);
	
}
