// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const SERVER_URL = "https://localhost:3200/api/";
const SERVER_URL = "https://jizl50dooc.execute-api.ap-southeast-1.amazonaws.com/test/api/";
// const REDIS_URL = "http://18.140.3.20/api/";
const REDIS_URL = "https://lzl.best/api/";


export const environment = {
  production: false,
  // /api/getAttendance?module_id=IS112&student_id=1 
  LOGIN_POST_URL: 'http://localhost:3000/api/user/login',

  GET_MODULES_URL: SERVER_URL + "module/getModules?student_id=",
  GET_ATTENDANCE_URL: SERVER_URL + "module/getAttendance?",
  MARK_ATTENDANCE_URL: SERVER_URL + "module/updateAttendance?",
  GET_STUDENT_DETAILS_URL: SERVER_URL + "student/getDetails?email=",
  GET_PAYMENT_STATUS_URL: SERVER_URL + "payment/getPaymentStatus?studentId=",
  GET_PAYMENT_AMOUNT_URL: SERVER_URL + "payment/getAmount?type=",
  CREATE_PAYMENT_URL: SERVER_URL + "payment/makePayment?",
  UPDATE_PAYMENT_URL: SERVER_URL + "payment/updatePayment?",

  // Redis
  GET_REDIS: REDIS_URL + "get?key=",
  CLEAR_REDIS: REDIS_URL + "clear?key=",
  SET_REDIS: REDIS_URL + "set?key="
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
