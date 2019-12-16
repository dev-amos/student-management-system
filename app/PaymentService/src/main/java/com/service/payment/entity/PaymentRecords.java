package com.service.payment.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(PaymentRecordsID.class)
public class PaymentRecords {
	@Id
	private int studentId;
	
	@Id
	private int annualYear;
	
	@Id
	private int semester;
	
	private boolean paid;
	
	public PaymentRecords() {
		
	}
	
	public PaymentRecords(int studentId, int annualYear, int semester, boolean paid) {
		this.studentId = studentId;
		this.semester = semester;
		this.paid = paid;
		this.annualYear = annualYear;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public boolean isPaid() {
		return paid;
	}

	public void setPaid(boolean paid) {
		this.paid = paid;
	}

	public int getAnnualYear() {
		return annualYear;
	}

	public void setAnnualYear(int annualYear) {
		this.annualYear = annualYear;
	}
	
}
