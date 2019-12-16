package com.service.payment.entity;

import java.io.Serializable;

public class PaymentRecordsID implements Serializable {
	
	private int studentId;
	private int semester;
	private int annualYear;
	
	public PaymentRecordsID() {
		
	}
	
	public PaymentRecordsID(int studentId, int semester, int annualYear) {
		this.studentId = studentId;
		this.semester = semester;
		this.annualYear = annualYear;
	}
	
	
	
	@Override
	public boolean equals(Object obj) {
		PaymentRecordsID other = null;
		if (!(obj instanceof PaymentRecordsID)) {
			return false;
		}
		other = (PaymentRecordsID) obj;
		return this.studentId == other.studentId && 
				this.semester == other.semester &&
				this.annualYear == other.annualYear;
	}

	public boolean equals(PaymentRecordsID id1, PaymentRecordsID id2) {
		return id1.studentId == id2.studentId && 
				id1.semester == id2.semester &&
				id1.annualYear == id2.annualYear;
	}
	
	public int hashCode() {
		return (int) (studentId + semester + annualYear);
	}
	
}
