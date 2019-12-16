package com.service.student.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
	private int studentId;
	
	private String name;
	
	private String email;
	
	private String studentType;
	
	public Student() {
		
	}
	
	public Student(int studentId, String name, String email, String studentType) {
		this.studentId = studentId;
		this.name = name;
		this.email = email;
		this.studentType = studentType;
	}
	
	public int getStudentId() {
		return studentId;
	}
	
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStudentType() {
		return studentType;
	}

	public void setStudentType(String studentType) {
		this.studentType = studentType;
	}
	
}
