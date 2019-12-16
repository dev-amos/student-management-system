package com.service.module.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(AttendanceID.class)
public class Attendance {

	@Id
	private String module_id;
	
	@Id
	private int week_id;
	
	@Id
	private int student_id;
	
	private boolean present;
	
	public Attendance () {}
	
	public Attendance (String module_id, int week_id, int student_id, boolean present) {
		this.module_id = module_id;
		this.week_id = week_id;
		this.student_id = student_id;
		this.present = present;
	}
	
	public String getModuleId() {return module_id;}
	public int getWeekId() {return week_id;}
	public int getStudentId() {return student_id;}
	public boolean getPresent() {return present;}
	
	public void setModuleId(String module_id) {this.module_id = module_id;}
	public void setWeekId(int week_id) {this.week_id = week_id;}
	public void setStudentId(int student_id) {this.student_id = student_id;}
	public void setPresent(boolean present) {this.present = present;}	
}
