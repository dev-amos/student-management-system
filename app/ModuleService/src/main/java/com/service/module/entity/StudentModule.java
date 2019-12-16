package com.service.module.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(StudentModuleID.class)
public class StudentModule {
	
	@Id
	private String module_id;
	
	@Id
	private String section_id;
	
	@Id
	private int student_id;
	
	public StudentModule() {}
	
	public StudentModule(String module_id, int student_id, String section_id) {
		this.module_id = module_id;
		this.student_id = student_id;
		this.section_id = section_id;
	}
	
	public String getModuleId() {return module_id;}
	public String getSectionId() {return section_id;}
	public int getStudentId() {return student_id;}
	
	public void setModuleId(String module_id) {this.module_id = module_id;}
	public void setSectionId(String section_id) {this.section_id = section_id;}
	public void setStudentId(int student_id) {this.student_id = student_id;}
}
