package com.service.module.entity;

import java.io.Serializable;

public class AttendanceID implements Serializable{
	private String module_id;
	private int week_id;
	private int student_id;
	
	public AttendanceID() {}
	
	public AttendanceID(String module_id, int week_id, int student_id) {
		this.module_id = module_id;
		this.week_id = week_id;
		this.student_id = student_id;
	}
	
	public boolean equals(AttendanceID id1, AttendanceID id2) {
		return id1.module_id.equals(id2.module_id) && id1.week_id==id2.week_id && id1.student_id==id2.student_id;
	}

	public int hashCode() {
		return module_id.hashCode() + week_id + student_id;
	}
}
