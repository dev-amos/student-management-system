package com.service.payment.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Fees {
	@Id
	private String studentType;
	
	private int semesterFee;
	
	public Fees() {
		
	}
	
	public Fees(String studentType, int semesterFee) {
		this.studentType = studentType;
		this.semesterFee = semesterFee;
	}

	public String getStudentType() {
		return studentType;
	}

	public void setStudentType(String studentType) {
		this.studentType = studentType;
	}

	public int getSemesterFee() {
		return semesterFee;
	}

	public void setSemesterFee(int semesterFee) {
		this.semesterFee = semesterFee;
	}
	
	
	
}
