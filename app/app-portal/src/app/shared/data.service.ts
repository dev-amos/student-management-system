import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpClient) { }

  viewModules(id: string) {
    return this.httpService.get(environment.GET_MODULES_URL + id)
  }

  getAttendance(module_id: string, student_id: string) {
    return this.httpService.get(environment.GET_ATTENDANCE_URL + "module_id=" + module_id + "&student_id=" + student_id)
  }

  markAttendance(module_id: string, section_id: string, week_id: number, student_id: number) {
    return this.httpService.get(environment.MARK_ATTENDANCE_URL + "module_id=" + module_id + "&student_id=" + student_id + "&week_id=" + week_id )
  }

  getStudentDetails(email: string) {
    return this.httpService.get(environment.GET_STUDENT_DETAILS_URL + email)
  }
  
  getPaymentStatus(student_id: number) {
    return this.httpService.get(environment.GET_PAYMENT_STATUS_URL+ student_id)
  }

  getPaymentAmount(type: string) {
    return this.httpService.get(environment.GET_PAYMENT_AMOUNT_URL+ type)
  }

  createPayment(amount: number, successUrl: string, failureUrl: string) {
    return this.httpService.get(environment.CREATE_PAYMENT_URL + "amount=" + amount + "&successUrl=" + successUrl + "&failureUrl=" + failureUrl)
  }

  updatePayment(paymentId: string, token : string, payerId : string, amount: any, studentId: string, annualYear: string, semester: string) {
    return this.httpService.get(environment.UPDATE_PAYMENT_URL + "paymentId=" + paymentId + "&token=" + token + "&payerId=" + payerId + "&amount=" + amount + "&studentId=" + studentId + "&annualYear=" + annualYear + "&semester=" + semester)
  }

}
