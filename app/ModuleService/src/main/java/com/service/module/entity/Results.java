package com.service.module.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(ResultsID.class)
public class Results {
	
	@Id
	private String module_id;
	
	@Id
	private int student_id;
	
	private String result;
	
	public Results() {}
	
	public Results(String module_id, int student_id, String result) {
		this.module_id = module_id;
		this.student_id = student_id;
		this.result = result;
	}
	
	public String getModuleId() {return module_id;}
	public int getStudentId() {return student_id;}
	public String getResult() {return result;}
	
	public void setModuleId(String module_id) {this.module_id=module_id;}
	public void setStudentId(int student_id) {this.student_id=student_id;}
	public void setResults(String result) {this.result=result;}

}
