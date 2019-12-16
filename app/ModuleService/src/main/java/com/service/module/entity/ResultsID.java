package com.service.module.entity;

import java.io.Serializable;

public class ResultsID implements Serializable{
	
	private String module_id;
	private int student_id;

	public ResultsID() {}
	
	public ResultsID(String module_id, int student_id) {
		this.module_id = module_id;
		this.student_id = student_id;
	}
	
	public boolean equals(ResultsID id1, ResultsID id2) {
		return id1.module_id.equals(id2.module_id) && id1.student_id==id2.student_id;
	}
	
	public int hashCode() {
		return module_id.hashCode() + student_id;
	}
}
